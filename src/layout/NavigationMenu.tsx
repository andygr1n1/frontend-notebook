import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PuzzleIcon } from '../assets/icons/PuzzleIcon'
import { PenColor } from '../mini-components/PenColor'
import { useRootStore } from '../StoreProvider'

export const NavigationMenu = () => {
    return (
        <ul className="relative flex w-full items-center justify-center px-4 py-2 gap-10 border-t border-primary-color border-opacity-30">
            <li>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to="/">
                    <HomeOutlined /> Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to="/ubuntu">
                    <ThunderboltOutlined /> Ubuntu
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to="/js">
                    <PuzzleIcon className="w-4 h-4" /> Js
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to="/react">
                    <ThunderboltOutlined /> React
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) => {
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
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
                        return `nav-menu-link ${
                            navData.isActive
                                ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                : ''
                        }`
                    }}
                    to="/nodejs">
                    <ApiOutlined />
                    Node js
                </NavLink>
            </li>
            <li className="absolute right-3 flex gap-5 justify-center items-center">
                <PenColor />
                <ThemeMode />
            </li>
        </ul>
    )
}

const ThemeMode = observer(() => {
    const { dark_mode, onChangeField } = useRootStore()

    useEffect(() => {
        const rootPage = document.getElementById('root')

        if (rootPage && dark_mode) rootPage.classList.add('dark-theme')
        if (rootPage && !dark_mode) rootPage.classList.remove('dark-theme')
    }, [dark_mode])

    return (
        <span
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full select-none"
            onClick={() => {
                onChangeField('dark_mode', !dark_mode)
                localStorage.setItem('color-theme', JSON.stringify(!dark_mode))
            }}>
            {dark_mode ? (
                <span className="material-icons text-3xl text-yellow-500 hover:animate-spin-slow">
                    brightness_high
                </span>
            ) : (
                <span className="material-icons text-3xl text-indigo-600 hover:animate-wiggle">
                    nights_stay
                </span>
            )}
        </span>
    )
})
