import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../StoreProvider'

export const GlobalSearchInput = observer(() => {
    const {
        catalogs$: { global_search, onChangeField },
    } = useRootStore()

    return (
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
    )
})
