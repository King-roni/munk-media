import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mm-brown': '#52341f',
        'mm-ivory': '#fef7f2',
        'mm-stone': '#dcdcdb',
        'mm-ink': '#322012',
      },
      fontFamily: {
        heading: ['Horizon', 'Archivo Black', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        accent: ['Tan Mon Cheri', 'system-ui', 'serif'],
      },
      container: { 
        center: true, 
        padding: '1rem' 
      },
    },
  },
  plugins: [],
}
export default config

