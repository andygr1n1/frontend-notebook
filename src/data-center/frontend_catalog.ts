import { v4 as uuid } from 'uuid'
import type { ICatalogSnapshotIn } from '../mst/types'

export const frontend_catalog$: ICatalogSnapshotIn[] = [
    {
        id: uuid(),
        route: '',
        title: 'Search',
        checked: true,
    },
    {
        id: uuid(),
        route: 'linux',
        title: 'Linux',
        checked: true,
    },
    {
        id: uuid(),
        route: 'git',
        title: 'Git',
        checked: true,
        sub_routes: [
            { id: uuid(), route: 'stash', title: 'Stash' },
            {
                id: uuid(),
                route: 'delete_commit',
                title: 'Delete Commit',
            },
            {
                id: uuid(),
                route: 'clean_up_remote_branch',
                title: 'Clean up remote branch',
            },
            {
                id: uuid(),
                route: 'rewriting_history',
                title: 'Rewriting history',
            },
            {
                id: uuid(),
                route: 'change_branch_name',
                title: '🈴 Change branch name',
            },
            {
                id: uuid(),
                route: 'delete_branch',
                title: '🚮 Delete branch',
            },
            {
                id: uuid(),
                route: 'change_remote_repository',
                title: 'Change remote repository',
            },
            { id: uuid(), route: 'git-apps', title: '🔖 Apps' },
            {
                id: uuid(),
                route: 'git-tutorials',
                title: '🎬 Git tutorials',
            },
        ],
    },
    {
        id: uuid(),
        route: 'js',
        title: 'Js',
        checked: true,
    },
    {
        id: uuid(),
        route: 'react',
        title: 'React',
        checked: true,
    },
    {
        id: uuid(),
        route: 'nodejs',
        title: 'Nodejs',
        checked: true,
    },
    {
        id: uuid(),
        route: 'css',
        title: 'Css',
    },
]
