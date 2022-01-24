import _ from 'lodash'
import { applySnapshot, types } from 'mobx-state-tree'
import { frontend_catalog$ } from '../../data-center/frontend_catalog'
import type { ICatalog, ICatalogSubRoute } from '../types'
import { Catalog } from '../models/Catalog.model'

export const Catalogs$ = types
    .model('Catalogs$', {
        all_catalogs$: types.array(Catalog),
        in_edit_mode: false,
        article_search: '',
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
        getCatalog(route: string): ICatalog | undefined {
            const catalog = _.find(self.all_catalogs$, {
                route: route,
            })
            if (!catalog) alert('gitCatalog error: not found')

            return catalog
        },
        get gitCatalogRoutes(): ICatalogSubRoute[] {
            const gitSubroutes = this.getCatalog('git')?.sub_routes
            return (
                gitSubroutes?.filter((sub_route) =>
                    _.includes(
                        _.lowerCase(sub_route.title),
                        _.lowerCase(self.article_search),
                    ),
                ) || []
            )
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
