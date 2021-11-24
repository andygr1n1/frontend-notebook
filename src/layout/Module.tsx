import styles from './Module.module.scss'
import { Outlet } from 'react-router-dom'
import { IRoute } from '../helpers/types'
import { SideMenu } from './SideMenu'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className="module-wrapper">
            <div className="flex m-auto">
                <div className="relative">
                    <SideMenu routes={routes} />
                </div>
                <div className={styles['content']}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
