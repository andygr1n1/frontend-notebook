/* eslint-disable indent */
import { observer } from 'mobx-react-lite'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { GLOBAL_ROUTE } from '../../helpers/enums'

export const Topbar = observer(() => {
    return (
        <div className="flex items-center gap-10 px-60 py-4">
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
                hover:bg-primary-color hover:!text-white
                ${className} ${
                    isActive ? '!bg-primary-color !bg-opacity-80 !text-white' : ''
                } `
            }>
            {children}
        </NavLink>
    )
}
