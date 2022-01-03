const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors,
        extend: {
            width: {
                '1040px': '1040px',
            },
        },
    },
    plugins: [],
}
