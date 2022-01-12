import { useEffect } from 'react'

import { AppMenuIcon } from '../../assets/icons/AppMenuIcon'
import { useRootStore } from '../../StoreProvider'
import { observer } from 'mobx-react-lite'
import { RotateAnimation } from '../../assets/animation'

export const RoutesMenu = observer(() => {
    const { onChangeField, app_routes_menu } = useRootStore()
    useEffect(() => {
        console.log('rerender of RoutesMenu')
    }, [app_routes_menu])
    console.log(
        'rerender of RoutesMenurerender of RoutesMenurerender of RoutesMenurerender of RoutesMenurerender of RoutesMenu',
    )
    return (
        <>
            <span
                className="bg-primary-color
                        text-gray-100 cursor-pointer  w-14 h-14 rounded
                        transition-all hover:shadow-primary-color hover:shadow-2xl hover:text-white"
                onClick={() => onChangeField('app_routes_menu', !app_routes_menu)}>
                <RotateAnimation
                    animate={app_routes_menu}
                    className="w-full h-full justify-center items-center">
                    <AppMenuIcon className="w-8 h-8" />
                </RotateAnimation>
            </span>
            {app_routes_menu && <RoutesModal />}
        </>
    )
})

export const RoutesModal = () => {
    return (
        <div
            className="absolute bottom-16 -right-1 h-[600px] w-[1000px] p-4 rounded-md border
         text-gray-600 border-gray-200 bg-white shadow-2xl">
            R O U T E S MODAL
        </div>
    )
}
