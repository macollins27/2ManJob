/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          soft: '#1D2940',
        },
        accent: {
          DEFAULT: '#FBBF24',
          soft: '#F59E0B',
        },
        bg: '#0B1220',
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F3F4F6',
        },
        text: {
          main: '#111827',
          muted: '#6B7280',
        },
        border: {
          subtle: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
    },
  },
  plugins: [],
}
