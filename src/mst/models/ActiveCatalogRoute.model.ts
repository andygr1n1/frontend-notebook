import { types } from 'mobx-state-tree'

export const ActiveCatalogRoute = types.model('ActiveCatalogRoute', {
    id: types.identifier,
    sub_route: types.string,
})