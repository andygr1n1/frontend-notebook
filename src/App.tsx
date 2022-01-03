import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { TopNavigationMenu } from './layout/TopNavigationMenu'
import { AppRoutes } from './Routes'

export const App = () => {
    console.log('App rerendering')
    return (
        <>
            <LocalStorageListener />
            <TopNavigationMenu />
            <AppRoutes />
        </>
    )
}

const LocalStorageListener = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
        const savedLocation: string = JSON.parse(
            localStorage.getItem('useLocation') || '',
        )
        savedLocation && navigate(savedLocation)
    }, [])

    useEffect(() => {
        localStorage.setItem('useLocation', JSON.stringify(pathname))
    }, [pathname])

    return null
}
