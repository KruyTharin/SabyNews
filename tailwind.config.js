/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'Navcolor': '#FA1939',
        'actColor' : '#D90C16',
        'sea-buckthorn': {
          DEFAULT: '#F9A62B',
          '50': '#FEF1DE',
          '100': '#FDE9CA',
          '200': '#FCD8A2',
          '300': '#FBC77A',
          '400': '#FAB753',
          '500': '#F9A62B',
          '600': '#E58C06',
          '700': '#AF6A05',
          '800': '#784903',
          '900': '#422802'
        },
        'dodger-blue': {
          DEFAULT: '#4390F8',
          '50': '#F4F9FF',
          '100': '#E0EDFE',
          '200': '#B9D6FC',
          '300': '#92BEFB',
          '400': '#6AA7F9',
          '500': '#4390F8',
          '600': '#0D70F6',
          '700': '#0757C4',
          '800': '#053F8D',
          '900': '#032757'
        },
      },
      corePlugins: {
        aspectRatio: false,
      },
      container: {
        padding: '30px',
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px'
        },
        
      },
    },
    fontFamily :{
      kulen : ['Roboto Serif','Koulen'],
      Battambang: ['Battambang']
    },
  },
  plugins: [
     require('@tailwindcss/aspect-ratio'),
     require('@tailwindcss/line-clamp'),        
  ],
}
