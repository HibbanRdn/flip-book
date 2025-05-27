import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/flip-book/',  // ganti sesuai nama repo
  plugins: [react()]
})
