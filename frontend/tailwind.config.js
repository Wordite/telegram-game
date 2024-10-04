/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: 'var(--color-purple)',
          light: 'var(--color-purple-light)',
        },
        glitter: {
          DEFAULT: 'var(--color-glitter)',
        },
        white: {
          DEFAULT: 'var(--color-white)',
        },
        black: {
          DEFAULT: 'var(--color-black)',
        },
        biege: {
          dark: 'var(--color-biege-dark)',
          DEFAULT: 'var(--color-biege)',
          light: 'var(--color-biege-light)',
          neutral: 'var(--color-biege-neutral)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        orange: {
          DEFAULT: 'var(--color-orange)',
          light: 'var(--color-orange-light)',
          dark: 'var(--color-orange-dark)',
        },
        blue: {
          light: 'var(--color-blue-light)',
        },
        'bottom-menu-bg': 'linear-gradient(90deg, #C6C4BA 0%, #D7D5CC 60%)',
        brown: {
          DEFAULT: 'var(--color-brown)',
          light: 'var(--color-brown-light)',
        },
      },
      boxShadow: {
        'light-two-sided': '',
        'orange-two-sided': '',
        'purple-one-sided': '',
        'purple-two-sided': '',
        'light-one-sided': '',
        'light-one-sided': '',
      },
    },
  },
  plugins: [],
}
