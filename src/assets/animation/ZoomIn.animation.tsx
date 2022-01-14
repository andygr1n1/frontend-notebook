import { useEffect, useRef } from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
import { zoomIn } from 'react-animations'
import { v4 as uuid } from 'uuid'
const zoom_in_animation = keyframes`${zoomIn}`

const Animation = styled.div`
    animation: ${zoom_in_animation} 0.4s;
`

export const ZoomInAnimationContainer: React.FC<{
    visibility: boolean
    className?: string
    onClose?: () => void
}> = ({ visibility, className = '', onClose, children }) => {
    const animationRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const AnimationClickEventListener = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            const animationHtmlElement = animationRef?.current


            if (!target || !animationHtmlElement) return

            if (target !== animationHtmlElement) {
                if (target.offsetParent !== animationHtmlElement) {
                    onClose?.()
                }
            }
        }

        window.addEventListener('click', AnimationClickEventListener)

        return () => window.removeEventListener('click', AnimationClickEventListener)
    }, [])

    return visibility ? (
        <Animation key={uuid()} ref={animationRef} className={`flex ${className}`}>
            {children}
        </Animation>
    ) : null
}
