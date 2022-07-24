import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../StoreProvider'

export const BlogTags = observer(() => {
    const {
        catalogs$: { allInfoCatalogs, onChangeField, active_blog_tag },
    } = useRootStore()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3 ">
                {allInfoCatalogs.map((catalog) => (
                    <button
                        key={catalog.id}
                        onClick={() => onChangeField('active_blog_tag', catalog)}
                        className={`min-w-[60px] rounded bg-primary-color p-1 
                        text-white shadow-md transition-all hover:translate-x-[-2px] hover:translate-y-[-1px]
                        ${active_blog_tag?.id === catalog.id ? 'bg-red-700' : ''}`}>
                        {catalog.title}
                    </button>
                ))}
            </div>
        </div>
    )
})
