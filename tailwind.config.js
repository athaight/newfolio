module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgGray': '#202020',
        'bgGrayLite': '#282629',
        'burstLinkText' : '#7b31b0'
      },
      dropShadow: {
        'pink': '0 0px 35px rgba(245, 39, 145, .9)',
        'peach': '0 0px 35px rgba(245, 121, 39, .9)',
        'ltblue': '0 0px 35px rgba(39, 155, 245, 0.9)',
        'ltyellow': '0 0px 35px rgba(245, 219, 39, 0.9)',
      },
      scale: {
        '175': '1.75',
      },
      fontSize: {
        xxxl: ['72px', '80px']
      }
    },
  },
  plugins: [],
}
