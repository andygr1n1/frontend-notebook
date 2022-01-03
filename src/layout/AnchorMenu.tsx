import { observer } from 'mobx-react-lite'
import { IAnchor } from '../helpers/types'
import styles from './SideMenu.module.scss'
import { useEffect } from 'react'
import { useRootStore } from '../StoreProvider'
import { useLocation, useNavigate } from 'react-router-dom'

export const AnchorMenu: React.FC<{ anchors: IAnchor[] }> = observer(({ anchors }) => {
    const { scrollToElement } = useRootStore()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        scrollToElement()
    }, [])

    return (
        <ul className={styles['anchors-list']}>
            {anchors.map(({ id, title }) => (
                <a
                    key={id}
                    href={id}
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToElement(id)
                        navigate(`${location.pathname}#${id}`)
                    }}>
                    <li>{title}</li>
                </a>
            ))}
        </ul>
    )
})
