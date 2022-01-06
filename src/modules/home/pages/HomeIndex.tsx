import { Content } from '../../../layout/Content'
import { EMPTY_PAGE_LOGO_ENUM } from '../../../helpers/enums'
import { EmptyPageLogo } from '../../../mini-components/EmptyPageLogo'

export const HomeIndex = () => {
    return (
        <Content>
            <EmptyPageLogo icon={EMPTY_PAGE_LOGO_ENUM.HOME} />
        </Content>
    )
}
