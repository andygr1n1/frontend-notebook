import { keyframes } from 'styled-components'
import styled from 'styled-components'
import { zoomIn, zoomOut } from 'react-animations'

const zoom_in_animation = keyframes`${zoomIn}`
const zoom_out_animation = keyframes`${zoomOut}`

const Animation = styled.div<{ animate: boolean }>`
    animation: ${(props) => (props.animate ? zoom_in_animation : zoom_out_animation)} 0.4s;
`

export const ZoomInAnimation: React.FC<{ animate: boolean; className?: string }> = ({
    animate,
    className = '',
    children,
}) => {
    console.log('ZoomInAnimation animate::::', animate)
    return (
        <Animation animate={animate} className={`flex ${className}`}>
            {children}
        </Animation>
    )
}
