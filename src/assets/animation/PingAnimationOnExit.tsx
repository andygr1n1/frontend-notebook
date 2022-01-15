import { useState } from 'react'

export const PingAnimationOnExit: React.FC<{ action?: () => void }> = ({
    action,
    children,
}) => {
    const [animator, setAnimator] = useState(false)
    return (
        <div
            onClick={() => {
                if (action) {
                    setAnimator(true)
                    const timeout = setTimeout(() => {
                        action()
                        setAnimator(false)
                        clearTimeout(timeout)
                    }, 400)
                }
            }}
            className={`${animator && 'animate-ping'}`}>
            {children}
        </div>
    )
}
