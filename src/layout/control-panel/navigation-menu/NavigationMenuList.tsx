import {
    GithubOutlined,
    HomeOutlined,
    ThunderboltOutlined,
    ApiOutlined,
} from '@ant-design/icons'
import { PuzzleIcon } from '../../../assets/icons/PuzzleIcon'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

import { useRootStore } from '../../../StoreProvider'

export const NavigationMenuList = observer(() => {
    const {
        catalogs$: { navMenuCatalogs },
    } = useRootStore()
    return (
        <ul className="flex w-full items-center gap-10 ">
            {navMenuCatalogs.map(({ id, route, title }) => (
                <li key={id}>
                    <NavLink
                        className={(navData) => {
                            return `nav-menu-link ${
                                navData.isActive
                                    ? 'font-bold !text-primary-color border-b-4 border-primary-color'
                                    : ''
                            }`
                        }}
                        to={route}>
                        {title}
                    </NavLink>
                </li>
            ))}
            {/* <li>
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
                    to="/linux">
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
            </li> */}
        </ul>
    )
})
