import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { AppMenuIcon } from '../../../../assets/icons/AppMenuIcon'
import { RotateAnimation } from '../../../../assets/animation'
import { useRootStore } from '../../../../StoreProvider'
import { debounce } from 'lodash'

export const CatalogMenuButton = observer(() => {
    const { onChangeField, app_routes_menu } = useRootStore()

    const debouncedClickHandler = useMemo(
        () => debounce(() => onChangeField('app_routes_menu', !app_routes_menu), 100),
        [app_routes_menu],
    )
    return (
        <span
            className="flex justify-center items-center bg-primary-color
                        text-gray-100 cursor-pointer  w-14 h-14 rounded
                        transition-all hover:shadow-primary-color hover:shadow-2xl hover:text-white"
            onClick={debouncedClickHandler}>
            <RotateAnimation animate={app_routes_menu} className="w-6 h-6">
                <AppMenuIcon className="w-6 h-6" />
            </RotateAnimation>
        </span>
    )
})
