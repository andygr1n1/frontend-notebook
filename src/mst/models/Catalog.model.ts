import _ from 'lodash'
import { getParentOfType, types } from 'mobx-state-tree'
import { Catalogs$ } from '../stores/Catalogs.store'
import { Root$ } from '../stores/Root.store'
import { CatalogSubRoute } from './CatalogSubRoute.model'

export const Catalog = types
    .model('Catalog', {
        id: types.identifier,
        title: '',
        checked: false,
        route: '',
        sub_routes: types.array(CatalogSubRoute),
        in_global_search: false,
    })
    .views((self) => ({
        active_sub_route(): string {
            const { catalog_active_sub_routes$: catalog_active_sub_routes$ } =
                getParentOfType(self, Root$)

            return catalog_active_sub_routes$.get(self.id)?.sub_route ?? ''
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        toggleCheckCatalog() {
            const { selectedCatalogs } = getParentOfType(self, Catalogs$)

            if (selectedCatalogs.length > 5 && !self.checked) {
                alert('You can select maximum 5 catalogs!')
                return
            }

            self.checked = !self.checked
        },
        toggleGlobalSearch(input: React.MutableRefObject<HTMLInputElement | null>) {
            const { allInfoCatalogs } = getParentOfType(self, Catalogs$)
            self.in_global_search = !self.in_global_search

            const inputElement = input?.current
            if (inputElement) {
                const atLeastOneCatalogInGlobalSearch = _.find(allInfoCatalogs, {
                    in_global_search: true,
                })
                const atLeastOneCatalogIsNotInGlobalSearch = _.find(allInfoCatalogs, {
                    in_global_search: false,
                })

                if (
                    (self.in_global_search && atLeastOneCatalogIsNotInGlobalSearch) ||
                    (!self.in_global_search && atLeastOneCatalogInGlobalSearch)
                ) {
                    inputElement.indeterminate = true
                } else {
                    inputElement.indeterminate = false
                }
            }
        },
    }))
