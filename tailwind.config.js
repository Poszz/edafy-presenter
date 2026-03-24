
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#c084fc',
        secondary: '#a78bfa',
        'bg-dark': '#1a1025',
        'bg-card': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'fluid-title': 'var(--title-size)',
        'fluid-h2': 'var(--h2-size)',
        'fluid-h3': 'var(--h3-size)',
        'fluid-body': 'var(--body-size)',
        'fluid-small': 'var(--small-size)',
      },
      spacing: {
        'slide-pad': 'var(--slide-padding)',
        'content-gap': 'var(--content-gap)',
        'element-gap': 'var(--element-gap)',
      }
    },
  },
  plugins: [],
}
