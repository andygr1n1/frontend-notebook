const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors,
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
            mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        },
        extend: {},
    },
    plugins: [],
}
