import { Outlet } from 'react-router-dom'
import type { IRoute } from '../helpers/types'
import { LeftMenu } from './LeftMenu'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className="flex flex-auto overflow-auto">
            <LeftMenu routes={routes} />
            <Outlet />
        </div>
    )
}
