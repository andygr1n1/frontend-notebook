import { IRoute } from '../helpers/types'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'
import styles from './LeftMenu.module.scss'

export const LeftMenu: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <ul className={styles['routes-list']}>
            {routes.map(({ route, title }) => (
                <LeftMenuLink key={route} route={route} title={title} />
            ))}
        </ul>
    )
}
