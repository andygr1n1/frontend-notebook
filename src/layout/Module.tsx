import { Outlet } from 'react-router-dom'
import { IRoute } from '../helpers/types'
import { SideMenu } from './SideMenu'
import styles from './Module.module.scss'
import { NavigationMenu } from './NavigationMenu'

export const Module: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <>
            <div className="flex flex-auto overflow-y-scroll">
                <SideMenu routes={routes} />

                <div className={styles['outlet-wrap']}>
                    <Outlet />
                </div>
            </div>
            <NavigationMenu />
        </>
    )
}
