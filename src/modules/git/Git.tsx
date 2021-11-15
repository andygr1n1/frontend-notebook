import styles from './Git.module.scss'
import { GitSideMenu } from './GitSideMenu'
import { GitPageContent } from './GitPageContent'

export const Git = () => {
    return (
        <div className={styles['page']}>
            <GitSideMenu />
            <GitPageContent />
        </div>
    )
}
