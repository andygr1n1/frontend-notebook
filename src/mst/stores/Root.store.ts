import { types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        current_location: '',
        dark_mode: true,
        pen_color: 'emerald',
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
        onChangePenColor(new_color: string): void {
            console.log('new_color', typeof new_color, new_color)
            self.pen_color_menu = false

            if (self.pen_color === new_color) {
                return
            }

            self.pen_color = new_color
        },
    }))
