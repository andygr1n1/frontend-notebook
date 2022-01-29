import { observer } from 'mobx-react-lite'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Content } from '../../../layout/Content'
import { useRootStore } from '../../../StoreProvider'

export const GlobalSearchIndex = observer(() => {
    const {
        catalogs$: {
            allInfoCatalogs,
            globalSearchSubroutes,
            allCatalogsInGlobalSearch,
            toggleAllCatalogsInGlobalSearch,
            global_search,
            onChangeField,
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
                    {allInfoCatalogs.map(
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
                autoFocus
                placeholder="Search"
                value={global_search}
                onChange={(e) => onChangeField('global_search', e.target.value)}
                className="
                my-5
                rounded
                text-gray-600 placeholder-italic
                transition-all
                focus:translate-x-[1px] focus:translate-y-[1px] focus:border:xl
                "
            />
            <div className="flex flex-wrap gap-3">
                {globalSearchSubroutes.map(({ sub_route, title, parentRoute }) => (
                    <span
                        className="
                        text-gray-600
                        rounded
                        bg-gray-50
                    ">
                        <NavLink
                            className={(navData) => {
                                return `left-menu-link p-3 hover:font-normal hover:text-white hover:bg-primary-color rounded ${
                                    navData.isActive
                                        ? '!text-primary-color font-bold'
                                        : ''
                                }`
                            }}
                            to={`${parentRoute}/${sub_route}`}>
                            {title}
                        </NavLink>
                    </span>
                ))}
            </div>
        </Content>
    )
})
