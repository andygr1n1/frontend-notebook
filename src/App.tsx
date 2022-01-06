import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppRoutes } from './Routes'
import { useRootStore } from './StoreProvider'

export const App = () => {
    const { onChangeField } = useRootStore()

    useEffect(() => {
        const getColorThemeFromLocalStorage: string | null =
            localStorage.getItem('color-theme')

        console.log('getColorThemeFromLocalStorage', getColorThemeFromLocalStorage)

        if (
            getColorThemeFromLocalStorage &&
            typeof JSON.parse(getColorThemeFromLocalStorage) === 'boolean'
        ) {
            onChangeField('dark_mode', JSON.parse(getColorThemeFromLocalStorage))
        }
    }, [])

    return (
        <>
            <LocalStorageListener />
            <AppRoutes />
        </>
    )
}

const LocalStorageListener = () => {
    const { onChangeField } = useRootStore()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const getLocalStorage: string | null = localStorage.getItem('useLocation')
        let savedLocation = ''
        if (getLocalStorage) savedLocation = JSON.parse(getLocalStorage)

        onChangeField('current_location', savedLocation)

        savedLocation && navigate(savedLocation)
    }, [])

    useEffect(() => {
        if (location.hash) {
            localStorage.setItem(
                'useLocation',
                JSON.stringify(`${location.pathname}${location.hash}`),
            )
        } else {
            localStorage.setItem('useLocation', JSON.stringify(location.pathname))
        }
    }, [location.pathname, location.hash])

    return null
}
