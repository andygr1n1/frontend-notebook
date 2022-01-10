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
        extend: {
            colors: {
                'primary-color': 'var(--color-primary)',
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [require('tailwindcss-textshadow')],
}
