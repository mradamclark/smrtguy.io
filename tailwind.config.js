/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './themes/paper-tui/layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'text': 'var(--text)',
        'border': 'var(--border)',
        'code-bg': 'var(--code-bg)',
      },
      maxWidth: {
        'content': '850px',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
      lineHeight: {
        'relaxed': '1.7',
        'loose': '1.8',
      },
    },
  },
  plugins: [],
}
