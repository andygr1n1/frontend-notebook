import { IRoute } from '../helpers/types'
import { SideMenuLink } from '../mini-components/SideMenuLink'
import styles from './Module.module.scss'

export const SideMenu: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <div className={styles['side-menu']}>
            <ul className={styles['ul']}>
                {routes.map(({ route, title }) => (
                    <SideMenuLink key={route} route={route} title={title} />
                ))}
            </ul>
        </div>
    )
}
