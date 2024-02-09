import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'node:path'
import dts, {type PluginOptions} from 'vite-plugin-dts'


const pluginConfigDts : PluginOptions= {rollupTypes: true}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(pluginConfigDts)],
  resolve : {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  root: './',
  build: {
    outDir : 'lib',
    
    lib: {
      entry: resolve(__dirname, 'src/components/index.tsx'),
      name: 'My first components library',
      // the proper extensions will be added
      formats: ['es','umd'],
      fileName: 'index',
    },
    copyPublicDir : false,
    minify: true,
  },
})
