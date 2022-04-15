module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#3fd0d4",
        "primary-dark" : "#3abdc1",
        "title": "#212121",
        "text": "#505050",
        "footer-text": "#a9a9a9",
        "black-layout" : "rgba(0,0,0,0.2)",
        "related": "#ee2852"
      },
      spacing: {
        "1/2":"50%",
        "3/5": "60%",
        "1/3": "33.333%",
        "90%":"90%",
        "100%": "100%"
      },
      backgroundSize: {
        '115%': '115%',
        '110%': '110%',
      },
      boxShadow: {
        'custom': '0 0 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-up-title': 'fade-up-title 1s ease',
      }
    },
  },
  plugins: [],
}
