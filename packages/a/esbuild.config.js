const esbuild = require('esbuild')
const {nodeExternalsPlugin} = require('esbuild-node-externals')

const NAME = '@yujeongjeon/a'

esbuild
    .build({
        entryPoints: ['index.ts'],
        outfile: 'dist/index.js',
        bundle: true,
        minify: true,
        platform: 'browser',
        format: 'esm',
        loader: {'.ts': 'ts', '.tsx': 'tsx'},
        plugins: [nodeExternalsPlugin()],
    })
    .then(() => console.log(`✅ ${NAME} Done`))
    .catch(() => process.exit(1))
