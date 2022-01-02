import { Outlet } from 'react-router-dom'
import { IRoute } from '../helpers/types'
import { SideMenu } from './SideMenu'
import styles from './Module.module.scss'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className={styles['module-wrapper']}>
            <div className="flex overflow-auto">
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
