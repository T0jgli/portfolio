/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            ...colors,
            secondary: "#2A6230",
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
