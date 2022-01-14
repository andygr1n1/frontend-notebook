import { v4 as uuid } from 'uuid'
import type { ICatalog$SnapshotIn } from '../mst/types'

export const frontend_catalog$: ICatalog$SnapshotIn[] = [
    {
        id: uuid(),
        route: '/',
        title: 'Search',
    },
    {
        id: uuid(),
        route: '/linux',
        title: 'Linux',
    },
    {
        id: uuid(),
        route: '/git',
        title: 'Git',
    },
    {
        id: uuid(),
        route: '/js',
        title: 'Js',
    },
    {
        id: uuid(),
        route: '/react',
        title: 'React',
    },
    {
        id: uuid(),
        route: '/nodejs',
        title: 'Nodejs',
    },
    {
        id: uuid(),
        route: '/css',
        title: 'Css',
    },
]
