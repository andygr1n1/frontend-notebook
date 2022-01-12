import { Outlet } from 'react-router-dom'
import type { IRoute } from '../helpers/types'
import { MessageModal } from '../mini-components/MessageModal'
import { LeftMenu } from './LeftMenu'
import { ControlPanel } from './ControlPanel'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <>
            <div className="flex flex-auto overflow-auto">
                <LeftMenu routes={routes} />
                <Outlet />
                <MessageModal />
            </div>
            <ControlPanel />
        </>
    )
}
