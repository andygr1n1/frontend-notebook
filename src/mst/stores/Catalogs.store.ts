import _ from 'lodash'
import { applySnapshot, types } from 'mobx-state-tree'
import { frontend_catalog$ } from '../../data-center/frontend_catalog'
import type { ICatalog } from '../types'
import { Catalog } from '../models/Catalog.model'

export const Catalogs$ = types
    .model('Catalogs$', {
        all_catalogs$: types.array(Catalog),
        in_edit_mode: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .views((self) => ({
        get navMenuCatalogs(): ICatalog[] {
            return _.take(self.all_catalogs$, 6)
        },
        get selectedCatalogs(): ICatalog[] {
            return self.all_catalogs$.filter(({ checked }) => checked)
        },
    }))
    .actions((self) => ({
        fetchCalatogs() {
            if (self.all_catalogs$.length === frontend_catalog$.length) return
            try {
                applySnapshot(self.all_catalogs$, frontend_catalog$)
            } catch (e) {
                alert(`error in fetchCalatogs()::: ${e}`)
            }
        },
    }))
