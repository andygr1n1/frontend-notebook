import React from 'react'
import { useMemo } from 'react'
import { debounce } from 'lodash'

import { AppMenuIcon } from '../../../assets/icons/AppMenuIcon'
import { useRootStore } from '../../../StoreProvider'
import { observer } from 'mobx-react-lite'
import { RotateAnimation } from '../../../assets/animation'
import { ZoomInAnimationContainer } from '../../../assets/animation/ZoomIn.animation'
import { NavLink } from 'react-router-dom'

export const CatalogMenu = observer(() => {
    const { onChangeField, app_routes_menu } = useRootStore()

    const debouncedClickHandler = useMemo(
        () => debounce(() => onChangeField('app_routes_menu', !app_routes_menu), 100),
        [app_routes_menu],
    )

    return (
        <>
            <span
                className="flex justify-center items-center bg-primary-color
                        text-gray-100 cursor-pointer  w-14 h-14 rounded
                        transition-all hover:shadow-primary-color hover:shadow-2xl hover:text-white"
                onClick={debouncedClickHandler}>
                <RotateAnimation animate={app_routes_menu} className="w-6 h-6">
                    <AppMenuIcon className="w-6 h-6" />
                </RotateAnimation>
            </span>
            <RoutesModal />
        </>
    )
})

export const RoutesModal = () => {
    const {
        app_routes_menu,
        onChangeField,
        catalogs$: { catalog$ },
    } = useRootStore()

    const closeRoutesModal = () => onChangeField('app_routes_menu', false)

    return app_routes_menu ? (
        <ZoomInAnimationContainer
            visibility={app_routes_menu}
            onClose={closeRoutesModal}
            className="routes-menu-modal  absolute bottom-16 -right-1 h-[600px] w-[1000px] p-8 rounded-md border
         text-gray-600 border-gray-200 bg-white shadow-2xl">
            <ul className="flex gap-5 flex-wrap w-full">
                {catalog$.map(({ id, title, route }) => (
                    <li
                        key={id}
                        className="flex h-[fit-content]"
                        onClick={closeRoutesModal}>
                        <NavLink
                            className={(navData) => {
                                return `catalog-menu-item ${
                                    navData.isActive
                                        ? 'font-bold group bg-opacity-100 shadow-primary-color shadow-2xl scale-110'
                                        : ''
                                }`
                            }}
                            to={route}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </ZoomInAnimationContainer>
    ) : null
}
