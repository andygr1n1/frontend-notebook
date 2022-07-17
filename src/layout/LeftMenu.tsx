import { observer } from 'mobx-react-lite'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'
import type { ICatalogSubRoute } from '../mst/types'
import { useRootStore } from '../StoreProvider'

export const LeftMenu: React.FC<{ sub_routes: ICatalogSubRoute[] }> = ({
    sub_routes,
}) => {
    return (
        <div className="relative hidden w-[320px] flex-col py-10 2xl:flex ">
            {!!sub_routes.length && <SearchInput />}
            <ul className="animate-fade-in-down list-disc overflow-auto pl-10 pr-5 marker:text-primary-color ">
                {sub_routes.map(({ sub_route, title }) => (
                    <LeftMenuLink key={sub_route} route={sub_route} title={title} />
                ))}
            </ul>
        </div>
    )
}

export const SearchInput = observer(() => {
    const {
        catalogs$: { onChangeField, article_search },
    } = useRootStore()
    return (
        <input
            type="text"
            autoComplete="off"
            autoFocus
            onChange={(e) => onChangeField('article_search', e.target.value)}
            id="floatingInput"
            placeholder="Search..."
            value={article_search}
            className="
            placeholder-italic mx-3
            mb-3 rounded
            border border-gray-500 text-gray-600
            focus:border focus:border-gray-500
            "
        />
    )
})
