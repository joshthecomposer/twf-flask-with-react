/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
      extend: {
          colors: {
                'mines': {
                    DEFAULT: '#2D2D2D',
                    50: '#DADADA',
                    100: '#D0D0D0',
                    200: '#BCBCBC',
                    300: '#A7A7A7',
                    400: '#939393',
                    500: '#7F7F7F',
                    600: '#6A6A6A',
                    700: '#565656',
                    800: '#414141',
                    900: '#2D2D2D',
                    950: '#1F1F1F'
                  },
          },
      },
  },
  plugins: [],
}

