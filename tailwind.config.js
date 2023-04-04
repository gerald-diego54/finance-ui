/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                "bice-blue": "#0068A3",
                "alice-blue": "#E6EFFC",
            }
        },
    },
    plugins: [],
};
