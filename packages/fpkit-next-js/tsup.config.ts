import { defineConfig } from 'tsup'
import tsconfig from './tsconfig.json'

// export default defineConfig({
//   name: 'nextra-theme-docs',
//   entry: ['src/index.ts'],
//   format: ['esm', 'cjs'],
//   dts: true,
//   external: ['nextra'],
//   outExtension: () => ({ js: '.js' }),
//   target: tsconfig.compilerOptions.target as 'es2016'
// })


export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  minify: true
})