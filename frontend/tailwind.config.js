export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // AWS Q inspired color palette
        aws: {
          orange: '#ff9900',
          'dark-blue': '#232f3e',
          'darker-blue': '#131a22',
          'light-blue': '#146eb4',
          'background': '#0f1419',
          'surface': '#1a1f2e',
        },
        // Override default grays for better dark theme
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0f1419',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out both',
      }
    },
  },
  plugins: [],
}

