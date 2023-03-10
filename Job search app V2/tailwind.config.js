/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme"); // required used here instead of import, as import can't be used

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"], // any number of directories down - any file ending with these extensionz (Vue, Js,Ts)
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans], // including new external font, along with original fonts from tailwind
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
      },
    },
  },
  plugins: [],
};
