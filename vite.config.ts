import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import dts, { type PluginOptions } from 'vite-plugin-dts'
import { libInjectCss, type LibOptions } from 'vite-plugin-lib-inject-css'

const pluginConfigDts: PluginOptions = { rollupTypes: true }
// https://github.com/emosheeep/fe-tools/tree/HEAD/packages/vite-plugin-lib-inject-css
const pluginConfigLibInjectCss: LibOptions = {
  // es format no formats necesita un pr xd
  formats : ['es'],
  entry: {
    index: 'src/components/index.tsx' // Don't forget the main entry!
  },
  
  build: {
    emptyOutDir: false,
    lib:{
      formats: ['es'],
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
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/components/index.tsx'),
      name: 'mi primera aplicación de react',
      // the proper extensions will be added
      formats: ['es'],
      fileName: 'index'
    },
    copyPublicDir: false,
    minify: true
  },
})
