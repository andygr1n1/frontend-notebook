import { observer } from 'mobx-react-lite'
import { Module } from '../../layout/Module'
import { useRootStore } from '../../StoreProvider'

export const LinuxNotes = observer(() => {
    const {
        catalogs$: { LinuxCatalogSubRoutes },
    } = useRootStore()

    return <Module routes={LinuxCatalogSubRoutes} />
})
