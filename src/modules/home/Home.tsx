import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../StoreProvider'
import { BlogTags } from './BlogTags'
import { OwnerBadge } from '../../components/OwnerBadge'

export const Home: React.FC = observer(() => {
    const {
        catalogs$: { active_blog_tag },
    } = useRootStore()
    return (
        <div className="flex flex-auto h-full flex-col">
            {/* informational */}
            <div className="flex max-w-[600px] flex-col items-center justify-center gap-6  self-center py-6">
                <h3>andygr1n1 blog</h3>
                <p className="text-lg">
                    I write articles about Web Development and Cloud Computing
                </p>
                <div>
                    <input />
                </div>
                <BlogTags />
            </div>
            {/* if search => blog else modules list -blog -jsquests -games */}
            <div className="align-center flex h-full w-full flex-auto flex-row px-10">
                <div className="flex w-fit flex-auto flex-wrap justify-start gap-4 px-4">
                    {active_blog_tag?.sub_routes.map((subroute) => (
                        <div
                            key={subroute.id}
                            className="flex h-72 w-96 rounded-lg bg-gray-200 shadow-md">
                            {subroute.title}
                        </div>
                    ))}
                </div>
                <OwnerBadge />
            </div>
        </div>
    )
})
