/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#1a1208',
        paper:  '#faf8f3',
        cream:  '#f2ede0',
        warm:   '#e8dfc8',
        muted:  '#6b5d4a',
        border: '#c8bda8',
        sage: {
          DEFAULT: '#4a7c59',
          light:   '#7aad89',
          pale:    '#d4ead8',
          dark:    '#3a6547',
        },
        rust: {
          DEFAULT: '#c94f2a',
          pale:    '#f5e0d8',
          dark:    '#a83d20',
        },
        gold: {
          DEFAULT: '#d4a017',
          pale:    '#f7edd0',
          dark:    '#b08010',
        },
        navy: {
          DEFAULT: '#1e3a5f',
          pale:    '#d6e4f5',
          dark:    '#152c48',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sketch:  ['Caveat', 'cursive'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tight2: '-0.05em',
        tight3: '-0.07em',
      },
    },
  },
  plugins: [],
}
