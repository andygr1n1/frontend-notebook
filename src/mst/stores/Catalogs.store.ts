import _ from 'lodash'
import { applySnapshot, types } from 'mobx-state-tree'
import { frontend_catalog$ } from '../../data-center/frontend_catalog'
import type { ICatalog, ICatalogSubRoute } from '../types'
import { Catalog } from '../models/Catalog.model'
import type { CATALOG_ROUTE } from '../../helpers/enums'

export const Catalogs$ = types
    .model('Catalogs$', {
        all_catalogs$: types.array(Catalog),
        in_edit_mode: false,
        article_search: '',
        active_catalog: types.late(() => types.safeReference(Catalog)),
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
        getCatalog(route: CATALOG_ROUTE): ICatalog | undefined {
            const catalog = _.find(self.all_catalogs$, {
                route: route,
            })
            if (!catalog) alert('gitCatalog error: not found')
            return catalog
        },
        get catalogSubRoutes(): ICatalogSubRoute[] {
            if (!self.active_catalog) return []

            const activeRoute = self.active_catalog.route as CATALOG_ROUTE

            const gitSubroutes = this.getCatalog(activeRoute)?.sub_routes

            return (
                gitSubroutes?.filter((sub_route) =>
                    _.includes(
                        _.lowerCase(sub_route.title),
                        _.lowerCase(self.article_search),
                    ),
                ) || []
            )
        },
        get allCatalogsInGlobalSearch(): boolean {
            const atLeastOneCatalogIsNotInGlobalSearch = _.find(self.all_catalogs$, {
                in_global_search: false,
            })

            if (atLeastOneCatalogIsNotInGlobalSearch) return false

            return true
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
        toggleAllCatalogsInGlobalSearch(): void {
            if (self.allCatalogsInGlobalSearch) {
                self.all_catalogs$.forEach((catalog) =>
                    catalog.onChangeField('in_global_search', false),
                )
            } else {
                self.all_catalogs$.forEach((catalog) =>
                    catalog.onChangeField('in_global_search', true),
                )
            }
        },
    }))
    .views((self) => ({
        // get GitCatalogSubRoutes(): ICatalogSubRoute[] {
        //     // const route = self.active_catalog?.route

        //     const subroutes = self.getCatalog(CATALOG_ROUTE.GIT)?.sub_routes

        //     return (
        //         subroutes?.filter((sub_route) =>
        //             _.includes(
        //                 _.lowerCase(sub_route.title),
        //                 _.lowerCase(self.article_search),
        //             ),
        //         ) || []
        //     )
        // },
        // get LinuxCatalogSubRoutes(): ICatalogSubRoute[] {
        //     const subroutes = self.getCatalog(CATALOG_ROUTE.LINUX)?.sub_routes

        //     console.log('active_catalog', self.active_catalog?.route)

        //     return (
        //         subroutes?.filter((sub_route) =>
        //             _.includes(
        //                 _.lowerCase(sub_route.title),
        //                 _.lowerCase(self.article_search),
        //             ),
        //         ) || []
        //     )
        // },

        get globalSearchSubroutes(): ICatalogSubRoute[] {
            return []
        },
    }))
