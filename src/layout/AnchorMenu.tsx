import { IAnchor } from '../helpers/types'
import styles from './SideMenu.module.scss'

export const AnchorMenu: React.FC<{ anchors: IAnchor[] }> = ({ anchors }) => {
    return (
        <ul className="absolute w-60 flex flex-col px-4 bg-red-500 right-0">
            {/* <ul className={styles['anchors-list']}> */}
            {anchors.map(({ id, title }) => (
                <a href={id}>
                    <li key={id}>{title}</li>
                </a>
            ))}
        </ul>
    )
}
