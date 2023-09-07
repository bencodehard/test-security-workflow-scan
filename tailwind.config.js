module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors:{
        black: "#151719",
        white: "#FcFdFd",
        'vekin':{
          DEFAULT: '#1FA37C',
          'green-80':'#4CB596',
          'green-60':'#79C8B0',
          'green-40':'#A5DACB',
          'green-20':'#9ACF00',
          'white':'#eceded',
          'black':'#151719',
          'gray':'#394047'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}