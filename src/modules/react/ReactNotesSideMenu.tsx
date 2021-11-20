import { NavLink } from 'react-router-dom'
import { SideMenu } from '../../layout/SideMenu'

export const ReactNotesSideMenu = () => {
    return (
        <SideMenu>
            <NavLink
                className={(navData) =>
                    navData.isActive ? 'sidemenu-navlink-active' : ''
                }
                to="react-router-6">
                <li>React Router 6</li>
            </NavLink>
        </SideMenu>
    )
}
