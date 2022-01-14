import { observer } from 'mobx-react-lite'

import { NavigationMenuList } from './NavigationMenuList'

import React from 'react'
import { RoutesMenu } from './RoutesMenu'

export const NavigationMenu = observer(() => {
    return (
        <div className="flex relative items-center justify-between w-[1000px]">
            <NavigationMenuList />
            <RoutesMenu />
        </div>
    )
})
