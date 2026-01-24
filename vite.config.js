import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: '/angry-virus-game/', // MUST match your repo name
})