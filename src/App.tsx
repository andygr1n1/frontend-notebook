import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TopNavigationMenu } from './layout/TopNavigationMenu'
import { AppRoutes } from './Routes'
import { useRootStore } from './StoreProvider'

export const App = () => {
    return (
        <>
            <LocalStorageListener />
            <TopNavigationMenu />
            <AppRoutes />
        </>
    )
}

const LocalStorageListener = () => {
    const { setCurrentLocation } = useRootStore()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const getLocalStorage: string | null = localStorage.getItem('useLocation')
        let savedLocation = ''
        if (getLocalStorage) savedLocation = JSON.parse(getLocalStorage)

        setCurrentLocation(savedLocation)

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
