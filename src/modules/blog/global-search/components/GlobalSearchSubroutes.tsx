import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { useRootStore } from '../../../../StoreProvider'

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
                        animate-fade-in-down
                        rounded
                        bg-gray-50
                        text-gray-600
                    ">
                    <NavLink
                        className={(navData) => {
                            return `left-menu-link rounded p-3 hover:bg-primary-color hover:font-normal hover:text-white  ${
                                navData.isActive ? 'font-bold !text-primary-color' : ''
                            }`
                        }}
                        to={`${parentRoute}/${sub_route}`}>
                        {title}
                    </NavLink>
                    <span
                        className="
                            absolute -top-2 right-0 rounded-md
                            bg-primary-color p-1 text-[10px] font-bold
                            leading-[10px]
                            text-white
                            ">
                        {parentRoute}
                    </span>
                </span>
            ))}
        </div>
    )
})
