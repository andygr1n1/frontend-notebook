import React from 'react'
import { Outlet } from 'react-router-dom'
import type { ICatalogSubRoute } from '../mst/types'
// import { ControlPanel } from './control-panel/ControlPanel'
import { LeftMenu } from './LeftMenu'

export const Module: React.FC<{ routes: ICatalogSubRoute[] }> = ({ routes }) => {
    return (
        <div className="no-scrollbar flex flex-auto flex-col ">
            <div>
                <LeftMenu sub_routes={routes} />
                <Outlet />
            </div>
            {/* <ControlPanel /> */}
        </div>
    )
}
