/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ffc500",
                secondary: "#2F4B4E",
                body: "#f8f8f8",
                imgBg: "#f4f4f4",
                placeholder: "#ededed",
            },
        },
    },
    plugins: [],
};
