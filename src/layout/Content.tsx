export const Content: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col overflow-auto px-28 w-[1000px] border-r border-l border-primary-color border-opacity-10 text-lg">
            {children}
        </div>
    )
}
