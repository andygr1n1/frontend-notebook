import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useRootStore } from '../../../StoreProvider'

export const ThemeMode = observer(() => {
    const { dark_mode, onChangeField } = useRootStore()

    useEffect(() => {
        const rootPage = document.body

        if (rootPage && dark_mode) rootPage.classList.add('dark-theme')
        if (rootPage && !dark_mode) rootPage.classList.remove('dark-theme')
    }, [dark_mode])

    return (
        <span
            className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full"
            onClick={() => {
                onChangeField('dark_mode', !dark_mode)
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
