import { observer } from 'mobx-react-lite'

import { NavigationMenuList } from './NavigationMenuList'

import React from 'react'
import { CatalogMenu } from './catalog-menu/CatalogMenu'

export const BlogNavigation = observer(() => {
    return (
        <div className="relative hidden h-14 w-full items-center justify-end gap-10 border-t border-primary-color px-[300px] 2xl:flex">
            <NavigationMenuList />
            <CatalogMenu />
        </div>
    )
})
