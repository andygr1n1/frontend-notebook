import { IRoute } from '../helpers/types'
import { ReactRouter6 } from '../modules/react/pages/ReactRouter6'
import { v4 as uuid } from 'uuid'
import { TerminalFutureTheme } from '../modules/ubuntu/pages/TerminalFutureTheme'

export const UbuntuRoutes: IRoute[] = [
    {
        id: uuid(),
        route: 'terminal-future-theme',
        title: 'Terminal Future Theme',
        component: <TerminalFutureTheme />,
    },
]
