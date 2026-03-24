import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// Plugin to handle figma:asset imports for deployment
const figmaAssetPlugin = () => ({
  name: 'figma-asset-handler',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) {
      // Return a placeholder that won't break the build
      return id;
    }
  },
  load(id: string) {
    if (id.startsWith('figma:asset/')) {
      // Return a placeholder image URL (using Unsplash for now)
      // In production, you'll replace this with your actual image URL
      return `export default "https://images.unsplash.com/photo-1518499894461-c3448e6e48c7?w=1200&h=800&fit=crop"`;
    }
  }
});

export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
