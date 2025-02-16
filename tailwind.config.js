// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        // Você pode definir cores personalizadas se desejar:
        yellowTheme: {
          50: "#fff9e6",
          100: "#fff3cc",
          300: "#ffeb99",
          500: "#ffd633",
          600: "#ffcc00",
          700: "#e6b800",
        },
      },
    },
  },
  plugins: [],
};
