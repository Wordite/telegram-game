import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import legacy from '@vitejs/plugin-legacy'

const legacyPluginOptions = {
  modernTargets: 'since 2023-01-01, not dead',
  modernPolyfills: true,
  renderLegacyChunks: false,
} as const

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg' }), legacy(legacyPluginOptions)],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/app/styles'),
      '@app': path.resolve(__dirname, './src/app'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/app/store'),
      '@types': path.resolve(__dirname, './src/app/types'),
    },
  },
})
