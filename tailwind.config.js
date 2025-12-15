/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/paper-tui/layouts/**/*.html',
    './content/**/*.{html,md}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#fafafa',
        'text': '#1a1a1a',
        'text-muted': '#666666',
        'border': '#e0e0e0',
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
