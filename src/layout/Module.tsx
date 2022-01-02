import { Outlet } from 'react-router-dom'
import { IRoute } from '../helpers/types'
import { SideMenu } from './SideMenu'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className="flex relative flex-auto m-auto bg-white">
            <div className="flex">
                <div className="w-60">
                    <SideMenu routes={routes} />
                </div>
                <div className="w-1040px pr-60 text-lg">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
