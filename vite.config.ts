import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Configure React Compiler per official guide
      babel: {
        plugins: [
          // valid values are the string literals "17" | "18" | "19" or a config object
          ['babel-plugin-react-compiler', { target: "18" }],
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
