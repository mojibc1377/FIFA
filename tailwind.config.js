/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'xs': { 'min':'200px' , 'max': '639px' },

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  
  },
  plugins: [],
  // screens: {
  //   '2xs': { min: '300px' },
  //   xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
  //   sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
  //   md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
  //   lg: { min: '1200px' }, // Desktop smallest.
  //   xl: { min: '1159px' }, // Desktop wide.
  //   '2xl': { min: '1359px' } // Desktop widescreen.
  // },
}

