import React from 'react'

import { NavigationMenu } from './navigation-menu/NavigationMenu'
import { PenColor } from './pen-color/PenColor'
import { ThemeMode } from './color-theme/ThemeMode'

export const ControlPanel = () => {
    return (
        <div className="relative flex w-full h-14 items-center justify-center px-4 gap-10 border-t border-primary-color border-opacity-30">
            <NavigationMenu />

            <div className="absolute right-3 flex gap-5 justify-center items-center">
                <PenColor />
                <ThemeMode />
            </div>
        </div>
    )
}
