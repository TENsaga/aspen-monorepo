import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: false, tsconfigPath: './tsconfig.app.json' })],
  resolve: {
    alias: {
      '@aspen-ui': path.resolve(__dirname, 'src/main.ts'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'aspen-ui',
      formats: ['es'],
      fileName: 'aspen-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
