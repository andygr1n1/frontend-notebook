import { Outlet } from 'react-router-dom'
import styles from './PageContent.module.scss'

export const PageContent: React.FC = () => {
    return (
        <div className={styles['content']}>
            <Outlet />
        </div>
    )
}
