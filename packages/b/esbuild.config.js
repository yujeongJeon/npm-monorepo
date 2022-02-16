const esbuild = require('esbuild')
const {nodeExternalsPlugin} = require('esbuild-node-externals')

const NAME = '@yujeongjeon/b'

esbuild
    .build({
        entryPoints: ['index.ts'],
        platform: 'node',
        outfile: 'dist/index.js',
        bundle: true,
        minify: true,
        loader: {'.ts': 'ts'},
        plugins: [nodeExternalsPlugin()],
    })
    .then(() => console.log(`✅ ${NAME} Done`))
    .catch(() => process.exit(1))
