import sade from 'sade'
import esbuild from 'esbuild'

let cli = sade('sade')

cli
  .command('build')
  .action(async () => {
    /** @type {import('esbuild').BuildOptions} */
    let config = {
      entryPoints: [ 'src/index.ts' ],
      platform: 'node',
      minify: true,
      bundle: true,
      sourcemap: 'inline',
    }

    await esbuild.build({
      ...config,
      format: 'esm',
      outfile: 'dist/index.js',
    })

    await esbuild.build({
      ...config,
      format: 'cjs',
      outfile: 'dist/index.cjs',
    })
  })

cli.parse(process.argv)
