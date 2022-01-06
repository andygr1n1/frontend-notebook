import styles from './Content.module.scss'

export const Content: React.FC = ({ children }) => {
    return <div className={styles['content']}>{children}</div>
}
