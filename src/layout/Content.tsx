import { observer } from 'mobx-react-lite'
import type { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useRootStore } from '../StoreProvider'
import { ThemeMode } from './control-panel/color-theme/ThemeMode'
import { PenColor } from './control-panel/pen-color/PenColor'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded'

export const Content: React.FC<{ children?: ReactNode }> = observer(({ children }) => {
    const { navigation_menu_mobile_status } = useRootStore()
    const location = useLocation()
    const isCurrentPathSearchPage = location.pathname === '/'

    return (
        <>
            <div className="flex h-full w-full flex-col overflow-auto border-r border-l border-primary-color border-opacity-10  text-lg 2xl:w-[1000px]">
                {navigation_menu_mobile_status ? (
                    <MobileControlPanelModal />
                ) : (
                    <div className="flex h-full w-full flex-col">
                        <div className="flex flex-auto flex-col px-14 2xl:px-10">
                            {children}
                        </div>
                        <MobileControlPanel />
                    </div>
                )}
                <div className="absolute bottom-16 left-3 flex flex-col gap-2 ">
                    {!isCurrentPathSearchPage && (
                        <NavLink
                            to="/"
                            className="rounded-full bg-primary-color p-1 !text-[14px] !leading-none !text-white">
                            <ManageSearchRoundedIcon />
                        </NavLink>
                    )}
                    <div className="bg-primary-color p-1 !text-[14px] !leading-none text-white 2xl:hidden">
                        <MenuRoundedIcon />
                    </div>
                </div>
            </div>
        </>
    )
})

export const MobileControlPanel = observer(() => {
    const { onChangeField } = useRootStore()

    const open = () => onChangeField('navigation_menu_mobile_status', true)

    return (
        <div className="sticky bottom-0 flex h-12 w-full border-t border-t-primary-color bg-bg-color p-2 text-text-color 2xl:hidden">
            <span
                onClick={open}
                className="
                        flex w-full cursor-pointer select-none items-center
                        justify-center border border-primary-color
                        p-1 text-sm font-bold
                        transition-colors hover:bg-primary-color
                        ">
                Control Panel
            </span>
        </div>
    )
})

export const MobileControlPanelModal = observer(() => {
    const {
        onChangeField,
        navigation_menu_mobile_status,
        catalogs$: { all_catalogs$ },
    } = useRootStore()

    const close = () => onChangeField('navigation_menu_mobile_status', false)

    return navigation_menu_mobile_status ? (
        <div className="flex h-full w-full flex-col bg-bg-color text-text-color  2xl:hidden">
            <ul className="flex w-full flex-auto flex-col gap-3">
                {all_catalogs$.map(({ title, route, active_sub_route, id }) => (
                    <li
                        key={id}
                        className="flex w-full items-center justify-center text-center"
                        onClick={close}>
                        <NavLink
                            className={(navData) => {
                                return `w-full p-2 hover:text-primary-color ${
                                    navData.isActive
                                        ? 'border-2 border-primary-color p-2 font-bold !text-primary-color'
                                        : ''
                                }`
                            }}
                            to={route ? `/${route}/${active_sub_route()}` : '/'}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="relative flex items-center justify-end gap-3 p-4">
                <PenColor />
                <ThemeMode />
            </div>
            <div
                onClick={close}
                className="flex h-12 w-full border-t border-t-primary-color p-2 opacity-100 ">
                <span
                    className="
                                flex w-full cursor-pointer select-none items-center
                                justify-center border border-primary-color
                                p-1 text-sm font-bold
                                transition-colors hover:bg-primary-color
                            ">
                    Exit
                </span>
            </div>
        </div>
    ) : null
})
