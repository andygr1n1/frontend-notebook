import { IAnchor } from '../helpers/types'
import styles from './SideMenu.module.scss'

export const AnchorMenu: React.FC<{ anchors: IAnchor[] }> = ({ anchors }) => {
    return (
        <ul className={styles['anchors-list']}>
            {anchors.map(({ id, title }) => (
                <a key={id} href={id}>
                    <li>{title}</li>
                </a>
            ))}
        </ul>
    )
}
