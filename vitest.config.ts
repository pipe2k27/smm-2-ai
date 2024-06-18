/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/tests/**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    env: {
      NODE_ENV: 'development',
      VITE_APP_LANG: 'ja',
      VITE_DEVLOCAL_USER_ID: 'general1@example.com',
      VITE_API_BASE_URL: 'https://myapiserver.com/api/',
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
