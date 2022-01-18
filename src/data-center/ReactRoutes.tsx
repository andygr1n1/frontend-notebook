import type { IRoute } from '../helpers/types'
import { ReactRouter6 } from '../modules/react/pages/ReactRouter6'
import { v4 as uuid } from 'uuid'
export const ReactRoutes: IRoute[] = [
    {
        id: uuid(),
        route: 'react-router-6',
        title: 'React Router 6',
        component: <ReactRouter6 />,
    },
]