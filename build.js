import esbuild from 'esbuild'
import process from 'process'

function build(dir) {
  const options = {
    entryPoints: [`src/${dir}/*.ts`],
    outdir: `dist/${dir}/`,
    bundle: true,
    minify: true,
  }

  if (dir === 'server') {
    options.platform = 'node'
  }

  return esbuild.build(options)
}

async function main() {
  const [, , target] = process.argv

  if (target === 'client' || target === 'server') {
    await build(target)
  } else {
    console.error(`[!] Invalid build target: ${target}`)
  }
}

main().catch((error) => console.error(error))
