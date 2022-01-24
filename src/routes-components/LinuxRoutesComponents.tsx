import { AddFontFamily } from '../modules/linux/pages/AddFontFamily'
import { ConverToIco } from '../modules/linux/pages/ConvertToIco'
import { TerminalFutureTheme } from '../modules/linux/pages/TerminalFutureTheme'

export const LinuxRoutesComponents: React.FC<{ route: string }> = ({ route }) => {
    if (route === 'terminal_future_theme') return <TerminalFutureTheme />
    if (route === 'convert_to_ico') return <ConverToIco />
    if (route === 'add_font_family') return <AddFontFamily />
    return null
}
