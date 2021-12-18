import { NavLink } from 'react-router-dom'

export const SideMenuLink: React.FC<{ route: string; title: string }> = ({
    route,
    title,
}) => {
    return (
        <NavLink
            className={(navData) => (navData.isActive ? 'sidemenu-navlink-active' : '')}
            to={route}>
            <li>{title}</li>
        </NavLink>
    )
}
