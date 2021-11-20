import { IGitRoute } from '../helpers/types'
import { PageContent } from './PageContent'
import { SideMenu } from './SideMenu'

export const Module: React.FC<{ routes: IGitRoute[] }> = ({ routes }) => {
    return (
        <div className="module-wrapper">
            <SideMenu routes={routes} />
            <PageContent />
        </div>
    )
}
