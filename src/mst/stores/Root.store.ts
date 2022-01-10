import { types } from 'mobx-state-tree'
import { PEN_COLOR } from '../../helpers/enums'

export const Root$ = types
    .model('Root$', {
        current_location: '',
        dark_mode: true,
        pen_color: types.optional(
            types.enumeration(Object.values(PEN_COLOR)),
            PEN_COLOR.EMERALD,
        ),
        pen_color_menu: false,
        success_message_modal_is_open: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        scrollToElement(id?: string) {
            const elementId = id ? id : self.current_location.split('#')[1]
            if (elementId) {
                const element = document.getElementById(elementId)
                element && element.scrollIntoView({ behavior: 'smooth', block: 'start' })

                if (id && element) {
                    const currentElementFocused = document.querySelector('.focused')

                    if (currentElementFocused)
                        currentElementFocused.classList.remove('focused')

                    element.classList.add('focused')
                }
            }
        },
    }))
    .actions((self) => ({
        onSuccessMessageModalOpen(code: string): void {
            navigator.clipboard.writeText(code)
            self.success_message_modal_is_open = true
        },
        onChangePenColor(new_color: PEN_COLOR): void {
            console.log('new_color', typeof new_color, new_color)
            self.pen_color_menu = false

            if (self.pen_color === new_color) {
                return
            }
            localStorage.setItem('pen_color', JSON.stringify(`${new_color}`))
            self.pen_color = new_color
        },
    }))
