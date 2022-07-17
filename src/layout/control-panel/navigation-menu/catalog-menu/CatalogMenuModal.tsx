import { ZoomInAnimationContainer } from '../../../../assets/animation/ZoomIn.animation'
import { useRootStore } from '../../../../StoreProvider'
import { CatalogMenuList } from './CatalogMenuList'
import { CatalogMenuSettingsButton } from './CatalogMenuSettingsButton'

export const RoutesModal = () => {
    const { app_routes_menu, onChangeField } = useRootStore()

    const closeRoutesModal = () => onChangeField('app_routes_menu', false)

    return (
        <ZoomInAnimationContainer
            visibility={app_routes_menu}
            onClose={closeRoutesModal}
            className="routes-menu-modal  absolute bottom-16 -right-1 h-[600px] w-[1000px] py-8 pl-8 rounded-md border
         text-gray-600 border-gray-200 bg-white shadow-2xl">
            <CatalogMenuList />
            <CatalogMenuSettingsButton />
        </ZoomInAnimationContainer>
    )
}
