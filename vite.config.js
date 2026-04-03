<<<<<<< HEAD
import { defineConfig } from 'vite';
export default defineConfig({ root: '.', publicDir: 'public' });
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], server: { port: 3001, open: true } })
>>>>>>> 2b52755ba358ab32d5133f86d7ec41847f7c7c00
