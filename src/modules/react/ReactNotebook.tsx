import styles from './ReactNotebook.module.css'
import { NavLink, Outlet } from 'react-router-dom'

export const ReactNotebook = () => {
    return (
        <>
            <h1>R E A C T</h1>
            <div className={styles['nav']}>
                <span>
                    <NavLink to="react-router-6">React Router 6</NavLink>
                </span>
            </div>
            <Outlet />
        </>
    )
}
