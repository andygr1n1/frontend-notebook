import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import styles from '../layout/LeftMenu.module.scss'

export const LeftMenuLink: React.FC<{ route: string; title: string }> = observer(
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
