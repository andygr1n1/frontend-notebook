import { Outlet } from 'react-router-dom'
import { IRoute } from '../helpers/types'
import { SideMenu } from './SideMenu'
import styles from './Module.module.scss'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className={styles['module-wrapper']}>
            <div className="flex overflow-auto">
                <SideMenu routes={routes} />

                <div className={styles['outlet-wrap']}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
