import { v4 as uuid } from 'uuid'
import { CATALOG_ROUTE } from '../helpers/enums'
import type { ICatalogSnapshotIn } from '../mst/types'

export const frontend_catalog$: ICatalogSnapshotIn[] = [
    {
        id: uuid(),
        route: CATALOG_ROUTE.DEFAULT,
        title: 'Search',
        checked: true,
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.LINUX,
        title: 'Linux',
        checked: true,
        sub_routes: [
            {
                id: uuid(),
                sub_route: 'terminal_future_theme',
                title: 'Terminal Future Theme',
            },
            {
                id: uuid(),
                sub_route: 'convert_to_ico',
                title: 'Convert to ico',
            },
            {
                id: uuid(),
                sub_route: 'add_font_family',
                title: 'Add font family',
            },
        ],
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.GIT,
        title: 'Git',
        checked: true,
        sub_routes: [
            { id: uuid(), sub_route: 'stash', title: 'Stash' },
            {
                id: uuid(),
                sub_route: 'delete_commit',
                title: 'Delete Commit',
            },
            {
                id: uuid(),
                sub_route: 'clean_up_remote_branch',
                title: 'Clean up remote branch',
            },
            {
                id: uuid(),
                sub_route: 'rewriting_history',
                title: 'Rewriting history',
            },
            {
                id: uuid(),
                sub_route: 'change_branch_name',
                title: '🈴 Change branch name',
            },
            {
                id: uuid(),
                sub_route: 'delete_branch',
                title: '🚮 Delete branch',
            },
            {
                id: uuid(),
                sub_route: 'change_remote_repository',
                title: 'Change remote repository',
            },
            { id: uuid(), sub_route: 'git_apps', title: '🔖 Apps' },
            {
                id: uuid(),
                sub_route: 'git_tutorials',
                title: '🎬 Git tutorials',
            },
        ],
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.JS,
        title: 'Js',
        checked: true,
        sub_routes: [
            {
                id: uuid(),
                sub_route: 'skill_up',
                title: 'Skill UP',
            },
        ],
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.REACT,
        title: 'React',
        checked: true,
        sub_routes: [
            {
                id: uuid(),
                sub_route: 'react_router_6',
                title: 'React Router 6',
            },
        ],
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.NODEJS,
        title: 'Nodejs',
        checked: true,
        sub_routes: []
    },
    {
        id: uuid(),
        route: CATALOG_ROUTE.CSS,
        title: 'Css',
        sub_routes: []
    },
]
