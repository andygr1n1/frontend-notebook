import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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

const PenColor = observer(() => {
    const { onChangeField, pen_color_menu } = useRootStore()
    return (
        <>
            <span
                className="h-7 w-7 rounded-full bg-primary-color shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangeField('pen_color_menu', !pen_color_menu)}
            />

            <PenColorModal />
        </>
    )
})

const PenColorModal = observer(() => {
    const { pen_color_menu, onChangePenColor } = useRootStore()

    if (!pen_color_menu) return null

    return (
        <div className="absolute -left-2 bottom-14 w-10 flex flex-col gap-4 items-center justify-center">
            <span
                className="h-7 w-7 rounded-full bg-red-600 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor('red')}
            />
            <span
                className="h-7 w-7 rounded-full bg-purple-600 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor('magic')}
            />
            <span
                className="h-7 w-7 rounded-full bg-emerald-500 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor('emerald')}
            />
        </div>
    )
})

const ThemeMode = observer(() => {
    const { dark_mode, onChangeField } = useRootStore()

    useEffect(() => {
        const rootPage = document.getElementById('root')

        if (rootPage && dark_mode) rootPage.classList.add('dark-theme')
        if (rootPage && !dark_mode) rootPage.classList.remove('dark-theme')
        console.log(dark_mode)
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
