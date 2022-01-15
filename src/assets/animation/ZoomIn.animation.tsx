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
        console.log('ENTER IN ZoomInAnimationContainer ')
        function AnimationClickEventListener(event: MouseEvent) {
            console.log('clickEvent', event.target)
            const target = event.target as HTMLElement
            const animationHtmlElement = animationRef?.current

            if (!target || !animationHtmlElement) return

            if (target !== animationHtmlElement) {
                if (target.offsetParent !== animationHtmlElement) {
                    onClose?.()
                    window.removeEventListener('click', AnimationClickEventListener)
                    window.removeEventListener('keydown', EscButtonEventListener)
                }
            }
        }

        function EscButtonEventListener(event: KeyboardEvent) {
            console.log('keyboardEvent', event.key)
            if (event.key === 'Escape') {
                onClose?.()
                window.removeEventListener('click', AnimationClickEventListener)
                window.removeEventListener('keydown', EscButtonEventListener)
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
