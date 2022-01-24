import { observer } from 'mobx-react-lite'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'
import type { ICatalogSubRoute } from '../mst/types'
import { useRootStore } from '../StoreProvider'

export const LeftMenu: React.FC<{ sub_routes: ICatalogSubRoute[] }> = ({
    sub_routes,
}) => {
    return (
        <div className="relative flex flex-col w-[320px] py-10 ">
            <SearchInput />
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
            flex
            mx-5
            my-2
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-600
            rounded
            placeholder-italic
            transition-all
            focus:text-gray-700 focus:!border-3 focus:!border-gray-600 focus:outline-none focus:ring-0
            focus:translate-x-[-1px]  focus:translate-y-[-1px] focus:shadow-xl"
        />
    )
})
