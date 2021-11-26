export const Chalk: React.FC<{ color?: string; string: string }> = ({
    color,
    string,
}) => {
    return <span style={{ color, fontWeight: 'bold' }}>{string}</span>
}
