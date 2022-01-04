import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import styles from './NavigationMenu.module.scss'

export const NavigationMenu = () => {
    return (
        <ul className={styles['navmenu']}>
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to="/">
                    <HomeOutlined /> Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to="/ubuntu">
                    <ThunderboltOutlined /> Ubuntu
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to="/react">
                    <ThunderboltOutlined /> React
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to="/git">
                    <GithubOutlined />
                    Git
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `${styles['navlink']} ${
                            navData.isActive ? styles['active'] : ''
                        }`
                    }}
                    to="/nodejs">
                    <ApiOutlined />
                    Node js
                </NavLink>
            </li>
        </ul>
    )
}
