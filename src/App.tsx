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
        const savedLocation: string = JSON.parse(
            localStorage.getItem('useLocation') || '',
        )

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
