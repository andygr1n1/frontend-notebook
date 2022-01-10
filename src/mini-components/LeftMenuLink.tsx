import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const LeftMenuLink: React.FC<{ route: string; title: string }> = observer(
    ({ route, title }) => {
        return (
            <li>
                <NavLink
                    className={(navData) => {
                        return `left-menu-link ${
                            navData.isActive ? '!text-primary-color font-bold' : ''
                        }`
                    }}
                    to={route}>
                    {title}
                </NavLink>
            </li>
        )
    },
)
