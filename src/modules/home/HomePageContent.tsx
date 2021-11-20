import { Outlet } from 'react-router-dom'
import { PageContent } from '../../layout/PageContent'

export const HomePageContent = () => {
    return (
        <PageContent>
            <Outlet />
        </PageContent>
    )
}
