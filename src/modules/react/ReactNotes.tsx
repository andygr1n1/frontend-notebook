import { Module } from '../../layout/Module'
import { useRootStore } from '../../StoreProvider'
import { observer } from 'mobx-react-lite'

export const ReactNotes = observer(() => {
    const {
        catalogs$: { catalogSubRoutes: CatalogSubRoutes },
    } = useRootStore()

    return <Module routes={CatalogSubRoutes} />
})
