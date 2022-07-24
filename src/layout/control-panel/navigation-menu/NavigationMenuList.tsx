import { observer } from 'mobx-react-lite'

import { useRootStore } from '../../../StoreProvider'
import { NavigationMenuItem } from './NavigationMenuItem'

export const NavigationMenuList = observer(() => {
    const {
        catalogs$: { selectedCatalogs },
    } = useRootStore()

    return (
        <ul className="flex w-full items-center gap-10">
            {selectedCatalogs.map((catalog) => (
                <NavigationMenuItem key={catalog.id} catalog={catalog} />
            ))}
        </ul>
    )
})
