import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: false, tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'aspen-ui',
      formats: ['es'],
      fileName: 'aspen-ui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
});
