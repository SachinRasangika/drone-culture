import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dc: {
          ink: '#1a1a1a',
          muted: '#888888',
          subtle: '#737373',
          'border-soft': '#d6d6d6',
          lime: '#dcf073',
          'lime-hover': '#cbe052',
          'lime-ink': '#4a5229',
          sage: '#8b9d77',
          'sage-muted': '#7a8a6a',
          'sage-dark': '#5a6b4a',
          'badge-bg': '#d4dcc4',
          surface: '#f5f5f5',
          'surface-alt': '#ebebeb',
          charcoal: '#2d2d2d',
          'charcoal-soft': '#2b2b2b',
          line: '#2a2a2a',
        },
      },
      maxWidth: {
        dc: '1400px',
      },
      borderRadius: {
        dc: '1.5rem',
        'dc-lg': '1.75rem',
      },
    },
  },
};
