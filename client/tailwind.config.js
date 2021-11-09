module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: "repeat(auto-fill, 250px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
