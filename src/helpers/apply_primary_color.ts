/**
 * Apply primary theme to root
 */
export const apply_primary_color = (pen_color: string): void => {
    let primaryColor = ''

    if (pen_color === 'emerald') {
        primaryColor = '#10b981'
    }
    if (pen_color === 'magic') {
        primaryColor = '#9333ea'
    }
    if (pen_color === 'red') {
        primaryColor = '#ef4444'
    }

    const root = document.documentElement

    root.style.setProperty('--color-primary', primaryColor)
}
