import { observer } from 'mobx-react-lite'
import type { IAnchor } from '../helpers/types'
import { useEffect } from 'react'
import { useRootStore } from '../StoreProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { HashIcon } from '../assets/icons/HashIcon'

export const AnchorMenu: React.FC<{ anchors: IAnchor[] }> = observer(({ anchors }) => {
    const { scrollToElement } = useRootStore()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            scrollToElement()
        }, 10)
    }, [])

    return (
        <ul className="w-72 py-10 overflow-auto">
            {anchors.map(({ id, title }) => (
                <li key={id}>
                    <a
                        className="anchor-menu-link"
                        href={id}
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToElement(id)
                            navigate(`${location.pathname}#${id}`)
                        }}>
                        <span>{title}</span>
                        <HashIcon />
                    </a>
                </li>
            ))}
        </ul>
    )
})
