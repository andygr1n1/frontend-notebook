import styles from './Git.module.scss'
import { NavLink } from 'react-router-dom'
import { SideMenu } from '../../layout/SideMenu'

export const GitSideMenu = () => {
    return (
        <SideMenu>
            <NavLink
                className={(navData) => (navData.isActive ? styles['active'] : '')}
                to="stash">
                <li>Stash</li>
            </NavLink>
            <NavLink
                className={(navData) => (navData.isActive ? styles['active'] : '')}
                to="clean_up_remote_branch">
                <li>Clean up remote branch</li>
            </NavLink>
        </SideMenu>
    )
}
