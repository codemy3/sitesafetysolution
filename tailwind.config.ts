import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E', // Bright green
        secondary: '#1F2937', // Dark charcoal
        accent: '#059669', // Darker green for hover
        background: '#FFFFFF', // White
        lightGray: '#F9FAFB', // Off-white
        textDark: '#1F2937', // Dark text
        textLight: '#6B7280', // Light gray text
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',
        // Keep any other colors you need
      },
      boxShadow: {
        soft: '0 10px 30px rgba(26, 58, 74, 0.08)'
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: []
} satisfies Config;
