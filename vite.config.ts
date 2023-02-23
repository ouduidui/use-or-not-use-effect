import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: '/use-or-not-use-effect/',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  define: {
    __DEV__: command !== 'build',
  },
  plugins: [
    // https://github.com/antfu/unocss
    Unocss(),

    react(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: [
        'react',
        'react-router-dom',
        'mobx',
        { 'usehooks-ts': ['useCounter', 'useDarkMode'] },
        { mobx: ['configure'] },
        { react: ['createContext'] },
        { 'mobx-react-lite': ['observer'] },
        {
          '@uiw/react-codemirror': [
            ['default', 'CodeMirror'],
          ],
        },
        {
          '@uiw/codemirror-extensions-langs': ['langs'],
        },
        {
          '@uiw/codemirror-theme-xcode': ['xcodeLight', 'xcodeDark'],
        },
        {
          '@uiw/codemirror-theme-github': ['githubLight', 'githubDark'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  server: {
    host: true,
  },
}))
