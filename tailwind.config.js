/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2453DF',
        secondary: '#0C1F58',
      },
      animation: {
        'border-light': 'border-light 2s linear infinite',
        'logo-light': 'logo-light 2s ease-in-out infinite',
      },
      keyframes: {
        'border-light': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'logo-light': {
          '0%, 100%': { opacity: 0, transform: 'translateX(-100%)' },
          '50%': { opacity: 1, transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
