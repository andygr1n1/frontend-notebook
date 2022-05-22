import { keyframes } from 'styled-components'
import styled from 'styled-components'
import type { ReactNode } from 'react'

const rotate_animation = keyframes`  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }`

const Animation = styled.div<{ animate: boolean }>`
    animation: ${(props) => props.animate && rotate_animation} 3s linear infinite;
`

export const RotateAnimation: React.FC<{
    animate: boolean
    className?: string
    children?: ReactNode
}> = ({ animate, className = '', children }) => {
    return (
        <Animation animate={animate} className={`flex ${className}`}>
            {children}
        </Animation>
    )
}
