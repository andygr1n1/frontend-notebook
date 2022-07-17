import { Content } from '../../../../layout/Content'
import { Paragraph } from '../../../../layout/Paragraph'
import { Code } from '../../../../mini-components/Code'

export const ConverToIco = () => {
    return (
        <Content>
            <h1>Convert to ico</h1>
            <Paragraph>
                <Code code="convert <your-image-here> -define icon:auto-resize=256,64,48,32,16 favicon.ico" />
            </Paragraph>
        </Content>
    )
}
