import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { useRootStore } from '../../../StoreProvider'

export const GlobalSearchSubroutes = observer(() => {
    const {
        catalogs$: { globalSearchSubroutes },
    } = useRootStore()

    return (
        <div className="flex flex-wrap gap-3">
            {globalSearchSubroutes.map(({ sub_route, title, parentRoute }) => (
                <span
                    className="
                        relative
                        text-gray-600
                        rounded
                        bg-gray-50
                        animate-fade-in-down
                    ">
                    <NavLink
                        className={(navData) => {
                            return `left-menu-link p-3 hover:font-normal hover:text-white hover:bg-primary-color rounded  ${
                                navData.isActive ? '!text-primary-color font-bold' : ''
                            }`
                        }}
                        to={`${parentRoute}/${sub_route}`}>
                        {title}
                    </NavLink>
                    <span
                        className="
                            absolute -top-2 right-0 p-1
                            text-[10px] text-white font-bold leading-[10px]
                            bg-primary-color
                            rounded-md
                            ">
                        {parentRoute}
                    </span>
                </span>
            ))}
        </div>
    )
})
