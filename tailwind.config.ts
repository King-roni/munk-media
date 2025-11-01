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
        heading: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        accent: ['system-ui', 'serif'],
      },
      container: { 
        center: true, 
        padding: '1rem' 
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config

