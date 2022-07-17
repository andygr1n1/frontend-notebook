import type { ReactNode } from 'react'

export const Dashboard: React.FC<{ background?: string; children?: ReactNode }> = ({
    background = '#add8e652',
    children,
}) => {
    return (
        <pre className="p-5px my-10px w-full" style={{ background }}>
            {children}
        </pre>
    )
}
