/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",

    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage:{
        'accueil': "url('../content/images/montagnes.gif')",
        'accueilphone': "url('../content/images/ski.jpg')"
      }
    },
    fontFamily: {
      'test':['gt-super', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'sstitre':['sohne', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif'],
      'snowky': ["SNOWKY", "cursive"],
      'chritsmas' :["Christmas"]
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter'),
    require("flowbite/plugin")
  ]
}
