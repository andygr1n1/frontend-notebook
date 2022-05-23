import type { ReactNode } from 'react'

export const Content: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col overflow-auto border-r border-l border-primary-color border-opacity-10 px-28 text-lg 2xl:w-[1000px]">
            {children}
        </div>
    )
}
