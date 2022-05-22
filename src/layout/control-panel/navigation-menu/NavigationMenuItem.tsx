import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import type { ICatalog } from '../../../mst/types'

export const NavigationMenuItem: React.FC<{ catalog: ICatalog }> = observer(
    ({ catalog }) => {
        const { id, route, title, active_sub_route } = catalog

        return (
            <li key={id}>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to={route ? `/${route}/${active_sub_route()}` : '/'}>
                    {title}
                </NavLink>
            </li>
        )
    },
)
