import { ReactNode, useEffect, useRef } from 'react'
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
    children?: ReactNode
    onClose?: () => void
}> = ({ visibility, className = '', onClose, children }) => {
    const animationRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function AnimationClickEventListener(event: MouseEvent) {
            const target = event.target as HTMLElement
            const animationHtmlElement = animationRef?.current
            if (!target || !animationHtmlElement) return
            if (
                target.closest(`.${animationRef?.current?.classList[0]}`) !==
                animationHtmlElement
            ) {
                onClose?.()
            }
        }

        function EscButtonEventListener(event: KeyboardEvent) {
            console.log('keyboardEvent', event.key)
            if (event.key === 'Escape') {
                onClose?.()
            }
        }

        window.addEventListener('click', AnimationClickEventListener)
        window.addEventListener('keydown', EscButtonEventListener)

        return () => {
            console.log('exit from ZoomInAnimationContainer ')
            window.removeEventListener('click', AnimationClickEventListener)
            window.removeEventListener('keydown', EscButtonEventListener)
        }
    }, [])

    return visibility ? (
        <Animation key={uuid()} ref={animationRef} className={`flex ${className}`}>
            {children}
        </Animation>
    ) : null
}
