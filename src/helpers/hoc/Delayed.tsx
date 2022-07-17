import React, { useState, useEffect, ReactNode } from 'react'

const useDelayedState = () => {
    const [isShown, setIsShown] = useState(false)

    const changeDelayState = (new_state: boolean) => setIsShown(new_state)

    return {
        isShown,
        changeDelayState,
    }
}

export const Delayed: React.FC<{
    waitBeforeShow?: number
    trigger: boolean
    children?: ReactNode
}> = ({ children, waitBeforeShow = 400, trigger }) => {
    const { isShown, changeDelayState } = useDelayedState()

    useEffect(() => {
        let time = trigger ? 0 : waitBeforeShow
        setTimeout(() => {
            changeDelayState(trigger)
        }, time)
    }, [trigger])

    return isShown ? <>{children}</> : null
}
