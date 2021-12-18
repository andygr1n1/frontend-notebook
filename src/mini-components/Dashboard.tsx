export const Dashboard: React.FC<{ background?: string }> = ({
    background = '#add8e652',
    children,
}) => {
    return (
        <pre className="p-5px my-10px w-full" style={{ background }}>
            {children}
        </pre>
    )
}
