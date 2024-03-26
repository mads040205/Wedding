/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','styles.css', 'styles-i.css'],
  theme: {
    extend: {
      colors: {
        'Eucalyptus':'#648474',
      },
      fontFamily: {
        'Truculenta': ['Truculenta', 'menlo'],
        'Space-Grotesk': ['"Space Grotesk"', 'sans-serif'],
        'PlayFairDisplay-Italic-Variable': ['PlayFairDisplay-Italic-Variable', 'serif'],
      },
    },
  },
  plugins: [],
}

