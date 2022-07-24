import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../StoreProvider'

export const BlogSearch: React.FC = observer(() => {
    const {
        catalogs$: {},
    } = useRootStore()

    return <input />
})
