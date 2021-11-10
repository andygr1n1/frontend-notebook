import styles from './GitNotebook.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export const Git = () => {
    return (
        <>
            <h1>G I T</h1>
            <div className={styles['nav']}>
                <span>
                    <NavLink to="stash">Stash</NavLink>
                </span>
            </div>
            <Outlet />
        </>
    )
}
