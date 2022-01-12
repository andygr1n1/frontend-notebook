import { keyframes } from 'styled-components'
import styled from 'styled-components'

const rotate_animation = keyframes`  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`

const Animation = styled.div<{ animate: boolean }>`
    animation: ${(props) => props.animate && rotate_animation} 3s linear infinite;
`

export const RotateAnimation: React.FC<{ animate: boolean; className?: string }> = ({
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
