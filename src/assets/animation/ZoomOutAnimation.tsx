import { keyframes } from 'styled-components'
import styled from 'styled-components'
import { zoomOut } from 'react-animations'

const zoom_in_animation = keyframes`${zoomOut}`

const Animation = styled.div<{ animate: boolean }>`
    animation: ${(props) => props.animate && zoom_in_animation} 0.3s;
`

export const ZoomOutAnimation: React.FC<{ animate: boolean; className?: string }> = ({
    animate,
    className = '',
    children,
}) => {
    return (
        <Animation animate={animate} className={`flex ${className}`}>
            {children}
        </Animation>
    )
}
