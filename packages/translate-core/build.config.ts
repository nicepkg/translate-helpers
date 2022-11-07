import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/core', 'src/md'],
  externals: ['esbuild', 'webpack', 'rollup', 'vite', 'nuxt'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  },
})
