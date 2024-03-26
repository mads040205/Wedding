/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','styles.css', 'styles-i.css'],
  theme: {
    extend: {
      colors: {
        'Eucalyptus':'#648474',
      },
      fontFamily: {
        'Truculenta': ['Truculenta', 'sans-serif'],
        'DancingScript-Variable': ['"DancingScript-Variable"', 'cursive'],
        'Space-Grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

