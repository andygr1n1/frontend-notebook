import { useEffect } from 'react'
import { useRootStore } from '../StoreProvider'
import { useLocation } from 'react-router-dom'

export const LocationObserver = () => {
    const { locationManager } = useRootStore()
    const location = useLocation()

    useEffect(() => {
        locationManager(location)
    }, [location])
    return <span className="hidden">***ag*** *let's blackhat not only in darknet*</span>
}
