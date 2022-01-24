import { types } from 'mobx-state-tree'

export const CatalogSubRoute = types.model('CatalogSubRoute', {
    id: types.identifier,
    sub_route: types.string,
    title: types.string,
})
