import type { ReactNode } from 'react'

export const Paragraph: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return <div className="cursor-default mb-10">{children}</div>
}
