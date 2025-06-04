/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
    "./src/**/*.js",
    
  ],
  darkMode: 'class', // You had this in your inline config
  theme: {
    extend: {
      animation: { // You had this in your inline config
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      // You can add your keyframes here as well if you prefer,
      // or keep them in input.css (see step 2)
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-red-100', 'bg-pink-100', 'bg-yellow-100', 'bg-cyan-100',
    'dark:bg-blue-900', 'dark:bg-green-900', 'dark:bg-purple-900', 'dark:bg-red-900', 'dark:bg-pink-900', 'dark:bg-yellow-900', 'dark:bg-cyan-900',
    'text-blue-800', 'text-green-800', 'text-purple-800', 'text-red-800', 'text-pink-800', 'text-yellow-800', 'text-cyan-800',
    'dark:text-blue-200', 'dark:text-green-200', 'dark:text-purple-200', 'dark:text-red-200', 'dark:text-pink-200', 'dark:text-yellow-200', 'dark:text-cyan-200'
  ]
}