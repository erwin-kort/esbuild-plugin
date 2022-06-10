import esbuild from 'esbuild'
import { plugin } from 'src/index'

beforeAll(async () => {
  await esbuild.build({
    entryPoints: [ 'test/single.ts' ],
    format: 'esm',
    outfile: 'test/single.js',
    bundle: true,
    plugins: [ plugin ],
  })

  await esbuild.build({
    entryPoints: [ 'test/recursive.ts' ],
    format: 'esm',
    outfile: 'test/recursive.js',
    bundle: true,
    plugins: [ plugin ],
  })
})

test('imports all files from a folder', async () => {
  let { accumulator } = await import('test/single')

  expect(accumulator).toBe(4)
})

test('imports all files from a folder recursively', async () => {
  let { accumulator } = await import('test/recursive')

  expect(accumulator).toBe(8)
})
