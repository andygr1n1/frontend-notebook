import { observer } from 'mobx-react-lite'
import { IAnchor } from '../helpers/types'
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
        <ul className="w-80 py-10 px-5 overflow-auto border-l border-primary-color border-opacity-10">
            {anchors.map(({ id, title }) => (
                <li>
                    <a
                        className="anchor-menu-link"
                        key={id}
                        href={id}
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToElement(id)
                            navigate(`${location.pathname}#${id}`)
                        }}>
                        <span>{title}</span>❖
                    </a>
                </li>
            ))}
        </ul>
    )
})
