import styles from './Home.module.scss'
import { HomePageContent } from './HomePageContent'
import { HomeSideMenu } from './HomeSideMenu'

export const Home = () => {
    return (
        <div className={styles['home']}>
            <HomeSideMenu />
            <HomePageContent />
        </div>
    )
}
