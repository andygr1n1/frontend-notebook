import { v4 as uuid } from 'uuid'
import type { ICatalogSnapshotIn } from '../mst/types'

export const frontend_catalog$: ICatalogSnapshotIn[] = [
    {
        id: uuid(),
        route: '/',
        title: 'Search',
        checked: true,
    },
    {
        id: uuid(),
        route: '/linux',
        title: 'Linux',
        checked: true,
    },
    {
        id: uuid(),
        route: '/git',
        title: 'Git',
        checked: true,
    },
    {
        id: uuid(),
        route: '/js',
        title: 'Js',
        checked: true,
    },
    {
        id: uuid(),
        route: '/react',
        title: 'React',
        checked: true,
    },
    {
        id: uuid(),
        route: '/nodejs',
        title: 'Nodejs',
        checked: true,
    },
    {
        id: uuid(),
        route: '/css',
        title: 'Css',
    },
]
