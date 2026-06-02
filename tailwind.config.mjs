/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#050b14',
          panel: '#08111d',
          panelAlt: '#0b1627',
          border: '#21416a',
          text: '#edf4ff',
          muted: '#9fb3c9',
          accent: '#9ed2ff',
          warn: '#f5d36a',
          info: '#d7eaff',
        },
      },
      fontFamily: {
        mono: [
          'Geist Mono',
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      boxShadow: {
        terminal: '0 0 0 1px rgba(158, 210, 255, 0.14), 0 16px 40px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
