import styles from './PageContent.module.scss'

export const PageContent: React.FC = ({ children }) => {
    return <div className={styles['content']}>{children}</div>
}
