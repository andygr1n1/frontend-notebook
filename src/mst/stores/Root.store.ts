import { types } from 'mobx-state-tree'

import { PEN_COLOR } from '../../helpers/enums'
import { Catalogs$ } from './Catalogs.store'

export const Root$ = types
    .model('Root$', {
        current_location: '',
        dark_mode: true,
        pen_color: types.optional(
            types.enumeration(Object.values(PEN_COLOR)),
            PEN_COLOR.EMERALD,
        ),
        pen_color_menu: false,
        app_routes_menu: false,
        success_message_modal_is_open: false,
        catalogs$: types.optional(Catalogs$, {}),
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
            self.pen_color_menu = false
            localStorage.setItem('pen_color', JSON.stringify(`${new_color}`))
            self.pen_color = new_color
        },
    }))
