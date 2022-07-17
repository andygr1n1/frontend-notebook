import React from 'react'

import { useRootStore } from '../../../../StoreProvider'
import { observer } from 'mobx-react-lite'
import { CatalogMenuButton } from './CatalogMenuButton'
import { RoutesModal } from './CatalogMenuModal'

export const CatalogMenu = observer(() => {
    const { app_routes_menu } = useRootStore()
    return (
        <>
            <CatalogMenuButton />
            {app_routes_menu && <RoutesModal />}
        </>
    )
})
