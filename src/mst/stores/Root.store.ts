import { types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        current_location: '',
        dark_mode: true,
    })
    .actions((self) => ({
        setCurrentLocation(newLocation: string): void {
            self.current_location = newLocation
        },
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
