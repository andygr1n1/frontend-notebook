import { useRootStore } from '../StoreProvider'
export const Code: React.FC<{ code: string }> = ({ code }) => {
    const { onSuccessMessageModalOpen } = useRootStore()
    return (
        <code
            onClick={() => {
                onSuccessMessageModalOpen(code)
            }}>
            {` ${code} `}
        </code>
    )
}
