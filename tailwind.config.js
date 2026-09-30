import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#2A0B2C',
          purple: '#3A103C',
          wine: '#8C2D52',
          gold: '#D99B26',
          bgLight: '#FDFBF7',
          borderLight: '#EFE8DC',
        },
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        action: 'rgb(var(--c-action) / <alpha-value>)',
        'on-action': 'rgb(var(--c-on-action) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75rem' }],
        lg: ['1.25rem', { lineHeight: '1.9rem' }],
      },
      minHeight: { touch: '3rem' },
      minWidth: { touch: '3rem' },
    },
  },
  plugins: [
    plugin(({ addVariant }) => addVariant('hc', '.high-contrast &')),
  ],
};