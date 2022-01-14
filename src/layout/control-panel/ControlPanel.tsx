import React, { Suspense } from 'react'

const NavigationMenu = React.lazy(() => import('./navigation-menu/NavigationMenu'))
const PenColor = React.lazy(() => import('./pen-color/PenColor'))
const ThemeMode = React.lazy(() => import('./color-theme/ThemeMode'))

export const ControlPanel = () => {
    return (
        <div className="relative flex w-full h-14 items-center justify-center px-4 gap-10 border-t border-primary-color border-opacity-30">
            <Suspense fallback={null}>
                <NavigationMenu />
                <div className="absolute right-3 flex gap-5 justify-center items-center">
                    <PenColor />
                    <ThemeMode />
                </div>
            </Suspense>
        </div>
    )
}
