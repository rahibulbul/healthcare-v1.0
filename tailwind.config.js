/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specifies the paths to all of your template files
  theme: {
    extend: {
      boxShadow: {
        "ui-perfect": "0px 25px 80px rgba(0, 0, 0, 0.15)",
        "ui-bold": "0px 15px 20px rgba(0, 0, 0, 0.2);",
      },
    },
  },
  plugins: [],
};
