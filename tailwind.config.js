/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Poppins'
      }, 

      spacing: {
        '200': '200px',
        '95': '95%',
        '40': '40%'
      }
    },
  },
  plugins: [],
}

