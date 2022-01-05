import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import styles from '../layout/SideMenu.module.scss'
export const SideMenuLink: React.FC<{ route: string; title: string }> = observer(
    ({ route, title }) => {
        return (
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to={route}>
                    {title}
                </NavLink>
            </li>
        )
    },
)
