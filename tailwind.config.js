/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','styles.css', 'input.css'],
  theme: {
    extend: {
      colors: {
        //Ivory Color//
        'Ivory-100': '#fff9e6',
        'Ivory-200': '#fffadc',
        'Ivory-300': '#fffbcf',
        'Ivory-400': '#fffcc2',
        'Ivory-500': '#fffdb5',
        'Ivory-600': '#fffda7',
        //Eucalyptus colors//
        
        'Eucalyptus-700':'#648474',
        'Eucalyptus-800':'#567468',
        'Eucalyptus-900':'#46645c',
        'Eucalyptus-950':'#3e5c56',
        //Our-Purple colors//
        'our-purple-100': '#e1dbef',
        'our-purple-500':'#ccc9f5',
      },
      fontFamily: {
        'Truculenta': ['Truculenta', 'menlo'],
        'Space-Grotesk': ['"Space Grotesk"', 'sans-serif'],
        'PlayFairDisplay-Italic-Variable': ['PlayFairDisplay-Italic-Variable', 'serif'],
        'Butterflykids': ['Butterflykids', 'cursive'],
      },
    },
  },
  plugins: [],
}

