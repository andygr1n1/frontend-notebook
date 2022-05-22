import { types, flow } from 'mobx-state-tree'
import type { NavigateFunction } from 'react-router-dom'

import { PEN_COLOR } from '../../helpers/enums'
import { Catalogs$ } from './Catalogs.store'
import localForage from 'localforage'
import type { Location } from 'react-router-dom'
import _ from 'lodash'
import { CatalogSubRoute } from '../models/CatalogSubRoute.model'

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
        catalog_active_sub_routes$: types.map(CatalogSubRoute),
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
            const catalogRoute = _.find(self.catalogs$.all_catalogs$, {
                route: currentLocationParts[0] ?? '',
            })

            if (!catalogRoute?.id) return

            self.catalogs$.onChangeField('active_catalog', catalogRoute)

            self.catalog_active_sub_routes$.put({
                id: catalogRoute.id,
                sub_route: currentLocationParts[1] || '',
                title: '',
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
            self.pen_color = new_color
        },
    }))
