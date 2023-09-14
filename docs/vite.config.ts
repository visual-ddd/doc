import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@wakeadmin/h',
  },
  ssr: {
    format: 'cjs',
  },
});
