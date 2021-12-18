import { GithubOutlined, HomeOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { EMPTY_PAGE_LOGO_ENUM } from '../helpers/enums'
import styles from './EmptyPageLogo.module.scss'

export const EmptyPageLogo: React.FC<{ icon: EMPTY_PAGE_LOGO_ENUM }> = ({ icon }) => {
    if (icon === EMPTY_PAGE_LOGO_ENUM.HOME)
        return <HomeOutlined className={styles['icon']} />
    if (icon === EMPTY_PAGE_LOGO_ENUM.REACT)
        return <ThunderboltOutlined className={styles['icon']} />
    if (icon === EMPTY_PAGE_LOGO_ENUM.GIT)
        return <GithubOutlined className={styles['icon']} />
    return null
}
