import _ from 'lodash'
import { applySnapshot, types } from 'mobx-state-tree'
import { frontend_catalog$ } from '../../data-center/frontend_catalog'
import type { ICatalog$ } from '../types'
import { Catalog$ } from './Catalog.store'

export const Catalogs$ = types
    .model('Catalogs$', {
        catalog$: types.array(Catalog$),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .views((self) => ({
        get navMenuCatalogs(): ICatalog$[] {
            return _.take(self.catalog$, 6)
        },
    }))
    .actions((self) => ({
        fetchCalatogs() {
            try {
                applySnapshot(self.catalog$, frontend_catalog$)
            } catch (e) {
                alert(`error in fetchCalatogs()::: ${e}`)
            }
        },
    }))
