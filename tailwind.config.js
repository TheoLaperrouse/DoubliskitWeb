/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                beige: '#fff0bc',
                'beige-hover': '#ecd984',
            },
        },
    },
    plugins: [],
};
