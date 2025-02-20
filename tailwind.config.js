module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/trae-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production", // Enable purging in production
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/trae-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
  },
};
