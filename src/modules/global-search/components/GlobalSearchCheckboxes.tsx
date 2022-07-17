import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { useRootStore } from '../../../StoreProvider'

export const GlobalSearchCheckboxes = observer(() => {
    const {
        catalogs$: {
            allInfoCatalogs,
            allCatalogsInGlobalSearch,
            toggleAllCatalogsInGlobalSearch,
        },
    } = useRootStore()

    const allCatalogsCheckboxRef = useRef<HTMLInputElement | null>(null)

    return (
        <div className="flex flex-col gap-4">
            <label className="flex items-center">
                <input
                    ref={allCatalogsCheckboxRef}
                    checked={allCatalogsInGlobalSearch}
                    type="checkbox"
                    className="mr-3 h-5 w-5 cursor-pointer rounded"
                    onChange={toggleAllCatalogsInGlobalSearch}
                />
                All catalogs
            </label>
            <div className="flex flex-wrap gap-3 ">
                {allInfoCatalogs.map(
                    ({ id, in_global_search, title, toggleGlobalSearch }) => (
                        <label key={id} className="flex items-center">
                            <input
                                checked={in_global_search}
                                type="checkbox"
                                className="mr-3 h-5 w-5 cursor-pointer rounded"
                                onChange={() =>
                                    toggleGlobalSearch(allCatalogsCheckboxRef)
                                }
                            />
                            {title}
                        </label>
                    ),
                )}
            </div>
        </div>
    )
})
