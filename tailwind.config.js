/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary':'#fcd51e',
        'secondary':'#fff'
      },
      backgroundImage:{
        'banner-pattern':'url(https://owly.wpenginepowered.com/wp-content/uploads/2018/12/breadcrumb-bg.png)',
        'banner-bottom-pattern':'url(https://owly.wpenginepowered.com/wp-content/themes/owly/images/slider-bottom-pattern.png)',
        'about-us-section':'url(https://owly.wpengine.com/wp-content/uploads/2019/02/about-page-bg.png)',
        'pentagon':'url(https://owly.wpenginepowered.com/wp-content/themes/owly/images/dotted-pentagon.png)',
        'get-in-touch-bg':'url(https://owly.wpengine.com/wp-content/uploads/2019/01/book-with-shadow.png)',
      }
    },
  },
  plugins: [],
}