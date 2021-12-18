import { IRoute } from '../helpers/types'
import { SideMenuLink } from '../mini-components/SideMenuLink'
import styles from './SideMenu.module.scss'

export const SideMenu: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <ul className={styles['routes-list']}>
            {routes.map(({ route, title }) => (
                <SideMenuLink key={route} route={route} title={title} />
            ))}
        </ul>
    )
}
