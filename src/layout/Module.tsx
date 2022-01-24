import React from 'react'
import { Outlet } from 'react-router-dom'
import type { ICatalogSubRoute } from '../mst/types'
import { LeftMenu } from './LeftMenu'

export const Module: React.FC<{ routes: ICatalogSubRoute[] }> = ({ routes }) => {
    return (
        <div className="flex flex-auto overflow-auto no-scrollbar">
            <LeftMenu sub_routes={routes} />
            <Outlet />
        </div>
    )
}
