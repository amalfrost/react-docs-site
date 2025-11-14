// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all your React files
  ],
  theme: {
    extend: {
        backgroundImage: {
        'react-pattern': "url('/pattern-randomized.svg')",
      },
    },
  },
  plugins: [],
}
