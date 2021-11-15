import { Outlet } from 'react-router-dom'
import { PageContent } from '../../layout/PageContent'

export const GitPageContent = () => {
    return (
        <PageContent>
            <Outlet />
        </PageContent>
    )
}
