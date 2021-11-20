import { IGitRoute } from '../helpers/types'
import { SideMenuLink } from '../mini-components/SideMenuLink'
import styles from './SideMenu.module.scss'

export const SideMenu: React.FC<{ routes: IGitRoute[] }> = ({ routes }) => {
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
