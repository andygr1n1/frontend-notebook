import { Module } from '../../layout/Module'
import { useRootStore } from '../../StoreProvider'
import { observer } from 'mobx-react-lite'

export const NodejsNotes = observer(() => {
    const {
        catalogs$: { catalogSubRoutes: CatalogSubRoutes },
    } = useRootStore()

    return <Module routes={CatalogSubRoutes} />
})
