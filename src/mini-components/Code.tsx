import { message } from 'antd'
export const Code: React.FC<{ code: string }> = ({ code }) => {
    return (
        <b>
            <code
                onClick={() => {
                    navigator.clipboard.writeText(code)
                    message.info({
                        content: `Code copied: ${code}`,
                        duration: 1,
                    })
                }}>
                {` ${code} `}
            </code>
        </b>
    )
}
