import { IRoute } from '../helpers/types'
import { v4 as uuid } from 'uuid'
import { TerminalFutureTheme } from '../modules/ubuntu/pages/TerminalFutureTheme'
import { ConverToIco } from '../modules/ubuntu/pages/ConvertToIco'
import { AddFontFamily } from '../modules/ubuntu/pages/AddFontFamily'

export const UbuntuRoutes: IRoute[] = [
    {
        id: uuid(),
        route: 'terminal-future-theme',
        title: 'Terminal Future Theme',
        component: <TerminalFutureTheme />,
    },
    {
        id: uuid(),
        route: 'convert-to-ico',
        title: 'Convert to ico',
        component: <ConverToIco />,
    },
    {
        id: uuid(),
        route: 'add-font-family',
        title: 'Add font family',
        component: <AddFontFamily />,
    },
]
