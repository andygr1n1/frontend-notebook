import { getParentOfType, types } from 'mobx-state-tree'
import { Catalog } from './Catalog.model'

export const CatalogSubRoute = types
    .model('CatalogSubRoute', {
        id: types.identifier,
        sub_route: types.string,
        title: types.string,
    })
    .views((self) => ({
        get parentRoute(): string {
            const { route } = getParentOfType(self, Catalog)
            return route
        },
    }))
