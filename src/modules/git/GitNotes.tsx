import { observer } from 'mobx-react-lite'
import { Module } from '../../layout/Module'
import { useRootStore } from '../../StoreProvider'

export const GitNotes = observer(() => {
    const {
        catalogs$: { catalogSubRoutes },
    } = useRootStore()

    return <Module routes={catalogSubRoutes} />
})
