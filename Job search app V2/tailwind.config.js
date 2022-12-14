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
        "brand-blue": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};