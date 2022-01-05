import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { useRootStore } from '../StoreProvider'
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

            <ThemeMode />
        </ul>
    )
}

const ThemeMode = observer(() => {
    const { dark_mode, onChangeField } = useRootStore()
    return (
        <li
            className="absolute right-3 flex items-center justify-center w-10 h-10 cursor-pointer rounded-full select-none"
            onClick={() => {
                console.log('click')
                onChangeField('dark_mode', !dark_mode)
            }}>
            {dark_mode ? (
                <span className="material-icons text-4xl text-yellow-500 hover:animate-spin-slow">
                    brightness_high
                </span>
            ) : (
                <span className="material-icons text-4xl text-indigo-600 hover:animate-wiggle">
                    nights_stay
                </span>
            )}
        </li>
    )
})
