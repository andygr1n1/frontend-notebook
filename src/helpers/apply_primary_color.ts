import { PEN_COLOR } from './enums'

/**
 * Apply primary theme to root
 */
export const apply_primary_color = (pen_color: PEN_COLOR): void => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', pen_color)
}
