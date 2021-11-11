import styles from './SideMenu.module.scss'

export const SideMenu: React.FC = ({ children }) => {
    return (
        <div className={styles['side-menu']}>
            <ul className={styles['ul']}>{children}</ul>
        </div>
    )
}
