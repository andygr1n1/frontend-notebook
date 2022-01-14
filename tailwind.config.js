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
                'fade-in-down': 'fade-in-down 1s ease-out',
                'zoom-in-out': 'zoom-in-out 1.0s infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'zoom-in-out': {
                    '0%': {
                        transform: 'scale(1.0)',
                    },
                    '50%': {
                        transform: 'scale(1.1)',
                    },
                    '100%': {
                        transform: 'scale(1.0)',
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-textshadow')],
}
