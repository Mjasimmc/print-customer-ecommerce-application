import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@print-delivery/theme/scss': path.resolve(__dirname, '../../packages/theme/src/styles'),
      '@print-delivery/theme': path.resolve(__dirname, '../../packages/theme/src'),
      '@print-delivery/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@print-delivery/api': path.resolve(__dirname, '../../packages/api/src'),
      '@print-delivery/types': path.resolve(__dirname, '../../packages/types/src'),
      '@print-delivery/constants': path.resolve(__dirname, '../../packages/constants/src'),
      '@print-delivery/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@print-delivery/assets': path.resolve(__dirname, '../../packages/assets/src'),
      '@print-delivery/hooks': path.resolve(__dirname, '../../packages/hooks/src'),
      '@print-delivery/config': path.resolve(__dirname, '../../packages/config/src'),
      '@print-delivery/auth': path.resolve(__dirname, '../../packages/auth/src'),
      '@print-delivery/permissions': path.resolve(__dirname, '../../packages/permissions/src'),
      '@print-delivery/router': path.resolve(__dirname, '../../packages/router/src'),
      '@print-delivery/layouts': path.resolve(__dirname, '../../packages/layouts/src'),
      '@print-delivery/localization': path.resolve(__dirname, '../../packages/localization/src'),
      '@print-delivery/testing': path.resolve(__dirname, '../../packages/testing/src'),
      '@print-delivery/storybook': path.resolve(__dirname, '../../packages/storybook/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 3000,
  },
});
