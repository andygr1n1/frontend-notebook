// import { RedChalk, GreenChalk } from '../../../mini-components/chalks'
import { Code } from '../../../mini-components/Code'
import { ColorBox } from '../../../mini-components/ColorBox'
// import { Dashboard } from '../../../mini-components/Dashboard'
import { Paragraph } from '../../../layout/Paragraph'
// import { YoutubeOutlined, SlackOutlined } from '@ant-design/icons'
// import { Tooltip } from 'antd'
import { Content } from '../../../layout/Content'
export const TerminalFutureTheme = () => {
    return (
        <Content>
            <h1>Terminal Future Theme</h1>
            <Paragraph>
                Good guys, since I'm on ubuntu, from start I designed a beautiful theme
                for vanilla ubuntu terminal.
            </Paragraph>
            <Paragraph>
                I like it, I save it, and I share it for all who wants something new in
                his pc life.
            </Paragraph>
            <Paragraph>So, let's start.</Paragraph>
            <Paragraph>Let's go to 👣 Menu 👣 Preferences</Paragraph>
            <Paragraph>
                <img src="https://drive.google.com/uc?export=view&id=1_QFIo35d5dSoezn1mOkgUtWkRr1Db1im" />
            </Paragraph>
            <Paragraph>
                Hah, great, the first step done! Take a minute of good music{' '}
                <a href="https://www.youtube.com/watch?v=lNgI2dHqQTs" target="_blank">
                    🎶
                </a>
            </Paragraph>
            <Paragraph>
                And Colors is the most interesting part. Here we will make the
                personalization
            </Paragraph>
            <Paragraph>
                <img src="https://drive.google.com/uc?export=view&id=1O3Jia797Dhwo-itjvAeZy2_2j55YNF9y" />
            </Paragraph>
            <Paragraph>Let's describe the colors:</Paragraph>
            <Paragraph>
                Default color: #C9E7FF #151A25
                <br />
                Bold color: x <br />
                Cursor color: x <br />
                Hightlight color: x <br />
            </Paragraph>
            <Paragraph> Palette </Paragraph>
            <Paragraph>
                <div className="flex">
                    <ColorPick code="#000000" />
                    <ColorPick code="#FF7979" />
                    <ColorPick code="#FFE27F" />
                    <ColorPick code="#3CFF55" />
                    <ColorPick code="#5A5AFC" />
                    <ColorPick code="#FB91FF" />
                    <ColorPick code="#1AC5A9" />
                    <ColorPick code="#C5E6FF" />{' '}
                </div>
                <div className="flex">
                    <ColorPick code="#E2E2E2" />
                    <ColorPick code="#FF0000" />
                    <ColorPick code="#3CFF55" />
                    <ColorPick code="#FFFF00" />
                    <ColorPick code="#9090FF" />
                    <ColorPick code="#FF00FF" />
                    <ColorPick code="#00FFFF" />
                    <ColorPick code="#FFFFFF" />
                </div>
            </Paragraph>
        </Content>
    )
}

const ColorPick: React.FC<{ code: string }> = ({ code }) => {
    return (
        <div className="flex">
            <ColorBox bg={code} />
            <Code code={code} />
        </div>
    )
}
