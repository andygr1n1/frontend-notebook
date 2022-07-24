import { BlogNavigation } from '../../layout/control-panel/navigation-menu/BlogNavigation'
import { GlobalSearchCheckboxes } from './global-search/components/GlobalSearchCheckboxes'
import { GlobalSearchInput } from './global-search/components/GlobalSearchInput'
import { GlobalSearchSubroutes } from './global-search/components/GlobalSearchSubroutes'

export const Blog: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col">
            <div className="flex h-full flex-auto gap-4">
                <div className="h-full min-w-[300px]" />
                <div className="flex flex-auto flex-col">
                    <h1>Global Search</h1>
                    <GlobalSearchCheckboxes />
                    <GlobalSearchInput />
                    <GlobalSearchSubroutes />
                </div>
                <div className="h-full min-w-[300px] " />
            </div>
            <BlogNavigation />
        </div>
    )
}
