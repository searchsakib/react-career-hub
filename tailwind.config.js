/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1123c1',

          secondary: '#9eea5b',

          accent: '#99efe2',

          neutral: '#1f1d35',

          'base-100': '#f8f9fc',

          info: '#6c8ce5',

          success: '#1a7f4e',

          warning: '#ab7207',

          error: '#f86f5d',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
