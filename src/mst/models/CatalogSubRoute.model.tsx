import { types } from 'mobx-state-tree'

export const CatalogSubRoute = types.model('CatalogSubRoute', {
    id: types.identifier,
    route: types.string,
    title: types.string,
})
