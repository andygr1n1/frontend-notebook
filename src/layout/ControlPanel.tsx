import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { PenColor } from '../mini-components/pen-color/PenColor'
import { useRootStore } from '../StoreProvider'
import { NavigationMenu } from '../components/navigation-menu/NavigationMenu'

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

const ThemeMode = observer(() => {
    const { dark_mode, onChangeField } = useRootStore()

    useEffect(() => {
        const rootPage = document.getElementById('root')

        if (rootPage && dark_mode) rootPage.classList.add('dark-theme')
        if (rootPage && !dark_mode) rootPage.classList.remove('dark-theme')
    }, [dark_mode])

    return (
        <span
            className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full select-none"
            onClick={() => {
                onChangeField('dark_mode', !dark_mode)
                localStorage.setItem('color-theme', JSON.stringify(!dark_mode))
            }}>
            {dark_mode ? (
                <span className="material-icons text-3xl text-yellow-500 hover:animate-spin-slow">
                    brightness_high
                </span>
            ) : (
                <span className="material-icons text-3xl text-indigo-600 hover:animate-wiggle">
                    nights_stay
                </span>
            )}
        </span>
    )
})