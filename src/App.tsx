import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocationObserver } from './functions/LocationObserver'
import { apply_primary_color } from './helpers/apply_primary_color'
import { ControlPanel } from './layout/control-panel/ControlPanel'
import { MessageModal } from './mini-components/MessageModal'

import { AppRoutes } from './Routes'
import { useRootStore } from './StoreProvider'

export const App = observer(() => {
    const navigate = useNavigate()
    const {
        pen_color,
        catalogs$: { fetchCalatogs },
        applySavedLocation,
    } = useRootStore()

    useEffect(() => {
        fetchCalatogs()
        applySavedLocation(navigate)
    }, [])

    useEffect(() => {
        apply_primary_color(pen_color)
    }, [pen_color])

    return (
        <>
            <AppRoutes />
            <ControlPanel />
            <MessageModal />
            <LocationObserver />
        </>
    )
})
