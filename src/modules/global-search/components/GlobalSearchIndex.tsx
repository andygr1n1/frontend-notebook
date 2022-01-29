import { observer } from 'mobx-react-lite'
import { Content } from '../../../layout/Content'
import { GlobalSearchCheckboxes } from './GlobalSearchCheckboxes'
import { GlobalSearchInput } from './GlobalSearchInput'
import { GlobalSearchSubroutes } from './GlobalSearchSubroutes'

export const GlobalSearchIndex = observer(() => {
    return (
        <Content>
            <h1>Global Search</h1>
            <GlobalSearchCheckboxes />
            <GlobalSearchInput />
            <GlobalSearchSubroutes />
        </Content>
    )
})
