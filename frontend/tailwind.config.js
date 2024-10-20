/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: 'var(--color-purple)',
          light: 'var(--color-purple-light)',
          'semi-transparent': 'var(--color-purple-semi-transparent)',
          dark: 'var(--color-purple-dark)',
          icon: 'var(--color-purple-icon)'
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
          neutral: 'var(--color-biege-neutral)',
          'light-1': 'var(--color-biege-light-1)',
          'biege-neutral-1': 'var(--color-biege-neutral-1)',
          'biege-neutral-2': 'var(--color-biege-neutral-2)',
          'biege-neutral-3': 'var(--color-biege-neutral-3)',
          '1': 'var(--color-biege-1)',
          '2': 'var(--color-biege-2)',
          '3': 'var(--color-biege-3)',
          '4': 'var(--color-biege-4)',
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
        red: {
          DEFAULT: 'var(--color-red)',
        }
      },
      backgroundImage: {
        'biege-gradient-horizontal':
          'linear-gradient(0deg, var(--color-biege-neutral-1) 60%, var(--color-biege-neutral) 100%)',
        'popup-gradient-background':
          'linear-gradient(to top, rgba(30, 29, 26, 0.4), rgba(30, 29, 26, 0.3))',
        'biege-gradient-horizontal-1': 'linear-gradient(to right, #BAB7AA 100%, #BAB7AA 24%)',
        'biege-gradient-horizontal-2': 'linear-gradient(to right, #C6C4BA, #D7D5CC)',
        'biege-135-deg-gradient': 'linear-gradient(135deg, #E4E2D8 0%, #D7D5CC 60%)'
      },
      // boxShadow: {
      //   'light-two-sided': '',
      //   'orange-two-sided': '',
      //   'purple-one-sided': '',
      //   'purple-two-sided': '',
      //   'light-one-sided': '',
      //   'light-one-sided': '',
      // },
    },
  },
  plugins: [],
}
