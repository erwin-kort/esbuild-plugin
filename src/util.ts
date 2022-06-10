import { resolve } from 'path'
import { readdir } from 'fs/promises'

export async function searchFiles(path: string, filter: RegExp, recursive = false) {
  let i = 0
  let files: string[] = []
  let dirents = await readdir(path, { withFileTypes: true })
  let awaiting: Promise<string[]>[] = []

  while (i < dirents.length) {
    let dirent = dirents[i++]

    if (recursive && dirent.isDirectory()) {
      awaiting.push(
        searchFiles(resolve(path, dirent.name), filter, true),
      )
    } else if (dirent.isFile()) {
      if (filter.test(dirent.name)) {
        files.push(resolve(path, dirent.name))
      }
    }
  }

  i = 0
  let awaited = await Promise.all(awaiting)

  while (i < awaited.length) {
    files.push(...awaited[i++])
  }

  return files
}
