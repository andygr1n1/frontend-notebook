import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { initialize_local_forage } from './functions/indexdb_manager'
import { LocationObserver } from './functions/LocationObserver'
import { apply_primary_color } from './helpers/apply_primary_color'
import { Footer } from './layout/footer/Footer.'
import { Topbar } from './layout/topbar/Topbar'
import { GrowingSpinners } from './mini-components/GrowingSpinners'
import { MessageModal } from './mini-components/MessageModal'

import { AppRoutes } from './Routes'
import { rootStore$, useRootStore } from './StoreProvider'

export const App = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const [initData, setInitData] = useState(false)

    const {
        pen_color,
        catalogs$: { fetchCalatogs },
        applySavedLocation,
    } = useRootStore()

    useEffect(() => {
        ;(async () => {
            const res = await initialize_local_forage(rootStore$)
            if (res) {
                const timeOut = setTimeout(() => {
                    setInitData(res)
                    clearTimeout(timeOut)
                }, 1000)
            }
        })()

        fetchCalatogs()
        location.pathname.length <= 1 && applySavedLocation(navigate)
    }, [])

    useEffect(() => {
        apply_primary_color(pen_color)
    }, [pen_color])

    return initData ? (
        <div className="flex h-full flex-col">
            <Topbar />
            <AppRoutes />
            <MessageModal />
            <LocationObserver />
            <Footer />
        </div>
    ) : (
        <GrowingSpinners />
    )
})
