import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppRoutes } from './Routes'
import { useRootStore } from './StoreProvider'

export const App = () => {
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
