/* eslint-disable indent */
import { observer } from 'mobx-react-lite'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { GLOBAL_ROUTE } from '../../helpers/enums'
import { ThemeMode } from '../control-panel/color-theme/ThemeMode'
import { PenColor } from '../control-panel/pen-color/PenColor'

export const Topbar = observer(() => {
    return (
        <div className="flex items-center justify-between px-[300px] py-4">
            <div className="flex items-center justify-center gap-4">
                <div className="select-none font-bold !text-primary-color">
                    blog_andygr1n1
                </div>

                <ul className="flex items-center gap-4">
                    <TopbarNavlink
                        to={GLOBAL_ROUTE.BLOG}
                        className="material-icons-outlined cursor-pointer">
                        auto_stories
                    </TopbarNavlink>
                    <TopbarNavlink to={GLOBAL_ROUTE.HOME}>Home</TopbarNavlink>
                    <TopbarNavlink to={GLOBAL_ROUTE.ABOUT}>About</TopbarNavlink>
                    <TopbarNavlink to={GLOBAL_ROUTE.CONTACTS}>Contacts</TopbarNavlink>
                    <TopbarNavlink to={GLOBAL_ROUTE.CV}>CV</TopbarNavlink>
                </ul>
            </div>

            <div className="flex items-center justify-center gap-5">
                <PenColor />
                <ThemeMode />
            </div>
        </div>
    )
})

export const TopbarNavlink: React.FC<{
    to: string
    children: ReactNode
    className?: string
}> = ({ to, children, className = '' }) => {
    return (
        <NavLink
            to={`/${to}`}
            className={({ isActive }) =>
                `flex min-h-[40px] !min-w-[100px] cursor-pointer
                items-center justify-center rounded-md p-1 text-center transition-all duration-150
                hover:translate-x-[-2px] hover:bg-primary-color hover:!text-white
                ${className} ${
                    isActive
                        ? ' !bg-primary-color !bg-opacity-80 !text-white shadow-md'
                        : ''
                } `
            }>
            {children}
        </NavLink>
    )
}
