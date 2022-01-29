import { observer } from 'mobx-react-lite'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'
import type { ICatalogSubRoute } from '../mst/types'
import { useRootStore } from '../StoreProvider'

export const LeftMenu: React.FC<{ sub_routes: ICatalogSubRoute[] }> = ({
    sub_routes,
}) => {
    return (
        <div className="relative flex flex-col w-[320px] py-10 ">
            {!!sub_routes.length && <SearchInput />}
            <ul className="overflow-auto marker:text-primary-color pl-10 pr-5 list-disc animate-fade-in-down ">
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
            mb-3 mx-3
            text-gray-600 placeholder-italic
            border border-gray-500 rounded
            focus:border-2 focus:mb-[10px] focus:border-primary-color
            "
        />
    )
})
