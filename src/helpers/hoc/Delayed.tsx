import React, { useState, useEffect } from 'react'

export const Delayed: React.FC<{ waitBeforeShow?: number }> = ({
    children,
    waitBeforeShow = 300,
}) => {
    const [isShown, setIsShown] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsShown(true)
        }, waitBeforeShow)
    }, [waitBeforeShow])

    return isShown ? <>{children}</> : null
}
