/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat'],
        plf: ['Playfair Display'],
      },
      colors: {
        bgr: '#f5f5f5',
        'bgr-auth': '#fff9f6',
        'primary-text': '#272727',
        '2nd-text': '#272727',
        '3rd-text': '#B78D71',
        'price-text': '#92715A',
        btn: '#251C17',
        'border-1': '#6E5544',
        msgEr: '#d2311b',
      },
    },
  },
  plugins: [],
};
