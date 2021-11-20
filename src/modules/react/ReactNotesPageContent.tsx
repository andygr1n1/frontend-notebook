import { Outlet } from 'react-router-dom'
import { PageContent } from '../../layout/PageContent'

export const ReactNotesPageContent = () => {
    return (
        <PageContent>
            <Outlet />
        </PageContent>
    )
}
