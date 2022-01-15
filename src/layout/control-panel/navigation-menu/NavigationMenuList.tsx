import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

import { useRootStore } from '../../../StoreProvider'

export const NavigationMenuList = observer(() => {
    const {
        catalogs$: { selectedCatalogs },
    } = useRootStore()
    return (
        <ul className="flex w-full items-center gap-10 ">
            {selectedCatalogs.map(({ id, route, title }) => (
                <li key={id}>
                    <NavLink
                        className={(navData) => {
                            return `nav-menu-link ${
                                navData.isActive
                                    ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                    : ''
                            }`
                        }}
                        to={route}>
                        {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
})
