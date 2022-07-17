import React from 'react'

import { NavigationMenu } from './navigation-menu/NavigationMenu'
import { PenColor } from './pen-color/PenColor'
import { ThemeMode } from './color-theme/ThemeMode'

export const ControlPanel = () => {
    return (
        <div className="relative hidden h-14 w-full items-center justify-center gap-10 border-t border-primary-color border-opacity-30 px-4 2xl:flex">
            <NavigationMenu />

            <div className="absolute right-3 flex items-center justify-center gap-5">
                <PenColor />
                <ThemeMode />
            </div>
        </div>
    )
}
