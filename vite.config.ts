import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node里内置模块 path 设置src路径为@
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  
    server: {
      proxy: {
       '/api': {
          target: 'http://syt.atguigu.cn',
          changeOrigin: true,
         
        },
      }
    }  
  })


