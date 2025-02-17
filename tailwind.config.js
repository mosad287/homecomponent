/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        spinnerground: "rgba(0, 0, 0, 20%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
