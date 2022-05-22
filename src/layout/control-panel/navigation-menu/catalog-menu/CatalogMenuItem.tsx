import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'
import { PingAnimationOnExit } from '../../../../assets/animation/PingAnimationOnExit'
import type { ICatalog } from '../../../../mst/types'
import { useRootStore } from '../../../../StoreProvider'

export const CatalogMenuItem: React.FC<{ catalog: ICatalog }> = observer(
    ({ catalog }) => {
        const {
            onChangeField,
            catalogs$: { in_edit_mode },
        } = useRootStore()

        const { id, title, route, active_sub_route, checked, toggleCheckCatalog } =
            catalog

        const closeRoutesModal = () => onChangeField('app_routes_menu', false)

        console.log('/${route}/${active_sub_route()}', `/${route}/${active_sub_route()}`)

        return (
            <li key={id} className="flex h-[fit-content] relative">
                <PingAnimationOnExit
                    action={!in_edit_mode ? () => closeRoutesModal() : undefined}>
                    <button
                        disabled={in_edit_mode}
                        className={`${in_edit_mode ? 'pointer-events-none' : ''}`}>
                        <NavLink
                            className={(navData) => {
                                return `catalog-menu-item ${
                                    navData.isActive
                                        ? 'font-bold group bg-opacity-100 shadow-primary-color shadow-2xl scale-110'
                                        : ''
                                }`
                            }}
                            to={route ? `/${route}/${active_sub_route()}` : '/'}>
                            {title}
                        </NavLink>
                    </button>
                    {in_edit_mode && (
                        <input
                            className="absolute  h-4 w-4 top-1 right-1 form-check-input appearance-none border
                            border-primary-color rounded-md bg-white checked:bg-yellow-300
                            focus:outline-none transition duration-200 my-1 align-top
                            bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                            checked={checked}
                            onChange={toggleCheckCatalog}
                        />
                    )}
                </PingAnimationOnExit>
            </li>
        )
    },
)
