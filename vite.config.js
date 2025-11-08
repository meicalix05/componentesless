import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './src/templates/'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {
       
        }
      }
    }
  },
  server: {
    open: true 
  }
})