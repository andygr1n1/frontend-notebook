import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../../StoreProvider'
import { CatalogMenuItem } from './CatalogMenuItem'

export const CatalogMenuList = observer(() => {
    const {
        catalogs$: { all_catalogs$ },
    } = useRootStore()

    return (
        <ul className="flex gap-5 flex-wrap w-full ">
            {all_catalogs$.map((catalog) => (
                <CatalogMenuItem catalog={catalog}></CatalogMenuItem>
            ))}
        </ul>
    )
})
