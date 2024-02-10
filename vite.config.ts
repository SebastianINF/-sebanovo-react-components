import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts, { type PluginOptions } from 'vite-plugin-dts'
import { libInjectCss, type LibOptions } from 'vite-plugin-lib-inject-css'
import { resolve } from 'node:path'
import { peerDependencies } from './package.json'

const pluginConfigDts: PluginOptions = {
  rollupTypes: true
}
// https://github.com/emosheeep/fe-tools/tree/HEAD/packages/vite-plugin-lib-inject-css
const pluginConfigLibInjectCss: LibOptions = {
  // es format no formats necesita un pr xd
  formats: ['es'],
  entry: {
    index: 'src/components/index.tsx' // Don't forget the main entry!
  },

  build: {
    emptyOutDir: true, // limpia el directorio cada vez que se compila?
    lib: {
      formats: ['es', 'cjs'],
      name: 'Mi primera libreria de react',
      entry: 'src/components/index.tsx'
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(pluginConfigDts), libInjectCss(pluginConfigLibInjectCss)],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  root: './',
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/components/index.tsx',
      name: 'mi primera aplicación de react',
      // the proper extensions will be added
      fileName: format => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)] // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true,
    emptyOutDir: true, // limpia el directoria cada vez que se compila?
    copyPublicDir: false,
    minify: true
  }
})
