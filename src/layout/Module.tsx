import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import type { IRoute } from '../helpers/types'
const LeftMenu = React.lazy(() => import('./LeftMenu'))

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className="flex flex-auto overflow-auto">
            <Suspense fallback={null}>
                <LeftMenu routes={routes} />
                <Outlet />
            </Suspense>
        </div>
    )
}
