import { types, flow, getSnapshot } from 'mobx-state-tree'
import type { NavigateFunction } from 'react-router-dom'

import { PEN_COLOR } from '../../helpers/enums'
import { Catalogs$ } from './Catalogs.store'
import localForage from 'localforage'
import type { Location } from 'react-router-dom'
import { ActiveCatalogRoute } from '../models/ActiveCatalogRoute.model'
import _ from 'lodash'

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
        active_catalog_routes$: types.map(ActiveCatalogRoute),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },

        locationManager(location: Location): void {
            self.current_location = `${location.pathname}${
                location.hash ? location.hash : ''
            }`

            const currentLocationParts = _.compact(self.current_location.split('/'))
            const catalogRouteId = _.find(self.catalogs$.all_catalogs$, {
                route: currentLocationParts[0] ?? '',
            })?.id

            if (!catalogRouteId) return

            self.active_catalog_routes$.put({
                id: catalogRouteId,
                sub_route: currentLocationParts[1] || '',
            })
        },
        scrollToElement(id?: string) {
            const elementId = id ? id : self.current_location.split('#')[1]
            console.log('hash', self.current_location.split('#')[1])
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
        applySavedLocation: flow(function* _applySavedLocation(
            navigate: NavigateFunction,
        ) {
            try {
                const res = yield localForage.getItem('current_location')
                console.log('res', res)
                self.current_location = res
                navigate(res)
                self.scrollToElement()
            } catch (e) {
                console.log('applySavedLocation error', e)
            }
        }),
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
