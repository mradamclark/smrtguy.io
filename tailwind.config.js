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
        'header-bg': 'var(--header-bg)',
        'text': 'var(--text)',
        'border': 'var(--border)',
        'code-bg': 'var(--code-bg)',
        'link-hover': 'var(--link-hover)',
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
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            '--tw-prose-links': 'var(--text)',
            '--tw-prose-bold': 'var(--text)',
            '--tw-prose-counters': 'var(--text)',
            '--tw-prose-bullets': 'var(--text)',
            '--tw-prose-hr': 'var(--border)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-quote-borders': 'var(--border)',
            '--tw-prose-code': 'var(--text)',
            '--tw-prose-pre-code': 'var(--text)',
            '--tw-prose-pre-bg': 'var(--code-bg)',
            '--tw-prose-th-borders': 'var(--border)',
            '--tw-prose-td-borders': 'var(--border)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
