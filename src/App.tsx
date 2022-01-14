import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { apply_primary_color } from './helpers/apply_primary_color'
import { ControlPanel } from './layout/control-panel/ControlPanel'
import { MessageModal } from './mini-components/MessageModal'
import { AppRoutes } from './Routes'
import { useRootStore } from './StoreProvider'

export const App = observer(() => {
    const {
        onChangeField,
        pen_color,
        catalogs$: { fetchCalatogs },
    } = useRootStore()

    useEffect(() => {
        const getColorThemeFromLocalStorage: string | null =
            localStorage.getItem('color-theme')

        const getPenColorFromLocalStorage: string | null =
            localStorage.getItem('pen_color')

        if (
            getColorThemeFromLocalStorage &&
            JSON.parse(getColorThemeFromLocalStorage) === false
        ) {
            onChangeField('dark_mode', JSON.parse(getColorThemeFromLocalStorage))
        }
        if (getPenColorFromLocalStorage) {
            onChangeField('pen_color', JSON.parse(getPenColorFromLocalStorage))
        }

        fetchCalatogs()
    }, [])

    useEffect(() => {
        apply_primary_color(pen_color)
    }, [pen_color])

    return (
        <>
            <LocalStorageListener />
            <AppRoutes />
            <ControlPanel />
            <MessageModal />
        </>
    )
})

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
