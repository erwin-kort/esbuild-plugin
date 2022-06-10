import type { Plugin, PluginBuild } from 'esbuild'
import { resolve, relative, sep } from 'path'
import { pathToFileURL, fileURLToPath } from 'url'

import { searchFiles } from './util'

export let plugin: Plugin = {
  name: '@erwin-kort/esbuild-plugin',
  setup: async (build) => {
    let tsRegex = /.(m|c)?ts$/

    build.onResolve({
      filter: /\/\*$/,
      namespace: 'file',
    }, ({ path, importer, resolveDir, kind }) => {
      if (kind != 'import-statement') {
        throw new Error('glob import only works with import statements')
      }

      let loader = 'js'

      if (tsRegex.test(importer)) {
        loader = 'ts'
      }

      return {
        path: resolve(resolveDir, path),
        namespace: '@erwin-kort/esbuild-plugin#' + loader,
      }
    })

    applyOnLoad(build, 'js')
    applyOnLoad(build, 'ts')
  },
}

let applyOnLoad = (build: PluginBuild, loader: 'js' | 'ts') => {
  let loadFilter = new RegExp(sep + '*$')
  let searchFilter: RegExp

  if (loader == 'js') {
    searchFilter = new RegExp('.(m|c)?js$')
  } else {
    searchFilter = new RegExp('.(m|c)?(j|t)s$')
  }

  build.onLoad(
    { filter: loadFilter, namespace: '@erwin-kort/esbuild-plugin#' + loader },
    async ({ path }) => {
      let { href } = pathToFileURL(path)
      let files: string[] = []
      let awaiting: Promise<string[]>[] = []

      if (href.endsWith('/**/*')) {
        path = fileURLToPath(href.replace(/\/\*\*\/\*$/, ''))

        awaiting.push(searchFiles(path, searchFilter, true))
      } else if (href.endsWith('/*')) {
        path = fileURLToPath(href.replace(/\/\*$/, ''))

        awaiting.push(searchFiles(path, searchFilter))
      }

      let i = 0
      let awaited = await Promise.all(awaiting)

      while (i < awaited.length) {
        files.push(...awaited[i++])
      }

      let contents = files
        .map((_path) => `import './${relative(path, _path).replace(sep, '/')}';`)
        .join('')

      return {
        contents,
        resolveDir: path,
        loader,
      }
    },
  )
}
