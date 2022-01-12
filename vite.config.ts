// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default {
    server: {
        host: '0.0.0.0',
        port: 9998,
    },
    plugins: [react(), svgr(), ViteAliases()],
}
