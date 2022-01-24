import { Content } from '../../../layout/Content'
import { Paragraph } from '../../../layout/Paragraph'
import { Code } from '../../../mini-components/Code'

export const AddFontFamily = () => {
    return (
        <Content>
            <h1>Add font family</h1>
            <Paragraph>
                Unpack fonts to
                <Code code="~/.local/share/fonts" />
                ( or <Code code="/usr/share/fonts" />, to install fonts system-wide ),
                then run
                <Code
                    code="fc-cache -f -v
"
                />
            </Paragraph>
            <Paragraph>Restart your IDE</Paragraph>
        </Content>
    )
}
