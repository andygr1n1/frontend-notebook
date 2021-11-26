import { Menu } from 'antd'
import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import styles from './TopNavigationMenu.module.scss'

export const TopNavigationMenu = () => {
    return (
        <Menu mode="horizontal" className={styles['top-navigation-menu']}>
            <Menu.Item key="Home" icon={<HomeOutlined />}>
                <NavLink
                    className={(navData) => (navData.isActive ? styles['active'] : '')}
                    to="/">
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item key="React" icon={<ThunderboltOutlined />}>
                <NavLink
                    className={(navData) => (navData.isActive ? styles['active'] : '')}
                    to="/react">
                    React
                </NavLink>
            </Menu.Item>
            <Menu.Item key="Git" icon={<GithubOutlined />}>
                <NavLink
                    className={(navData) => (navData.isActive ? styles['active'] : '')}
                    to="/git">
                    Git
                </NavLink>
            </Menu.Item>
            <Menu.Item key="Node" icon={<ApiOutlined />}>
                <NavLink
                    className={(navData) => (navData.isActive ? styles['active'] : '')}
                    to="/nodejs">
                    Git
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}
