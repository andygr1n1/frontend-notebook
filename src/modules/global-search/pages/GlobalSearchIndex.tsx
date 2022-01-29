import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { Content } from '../../../layout/Content'
import { useRootStore } from '../../../StoreProvider'

export const GlobalSearchIndex = observer(() => {
    const {
        catalogs$: {
            all_catalogs$,
            globalSearchSubroutes,
            allCatalogsInGlobalSearch,
            toggleAllCatalogsInGlobalSearch,
        },
    } = useRootStore()

    const allCatalogsCheckboxRef = useRef<HTMLInputElement | null>(null)

    return (
        <Content>
            <h1>Global Search</h1>
            <div className="flex flex-col gap-4">
                <label className="flex items-center">
                    <input
                        ref={allCatalogsCheckboxRef}
                        checked={allCatalogsInGlobalSearch}
                        type="checkbox"
                        className="rounded cursor-pointer w-5 h-5 mr-3"
                        onChange={toggleAllCatalogsInGlobalSearch}
                    />
                    All catalogs
                </label>
                <div className="flex gap-3">
                    {all_catalogs$.map(
                        ({ id, in_global_search, title, toggleGlobalSearch }) => (
                            <label key={id} className="flex items-center">
                                <input
                                    checked={in_global_search}
                                    type="checkbox"
                                    className="rounded cursor-pointer w-5 h-5 mr-3"
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
            <input
                type="text"
                placeholder="Search"
                className="
                my-5
                rounded
                text-gray-600 placeholder-italic
                transition-all
                focus:translate-x-[1px] focus:translate-y-[1px] focus:border:xl
                "
            />
            <div>
                {globalSearchSubroutes.map((subroute) => (
                    <span>{subroute.title}</span>
                ))}
            </div>
        </Content>
    )
})
