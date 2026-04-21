import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    open: '/index.html'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        oNas: resolve(__dirname, 'o-nas.html'),
        sluzby: resolve(__dirname, 'sluzby.html'),
        galerie: resolve(__dirname, 'galerie.html'),
        tym: resolve(__dirname, 'tym.html'),
        kontakt: resolve(__dirname, 'kontakt.html')
      }
    }
  }
});
