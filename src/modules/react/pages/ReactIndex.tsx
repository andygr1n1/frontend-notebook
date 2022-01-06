import { Content } from '../../../layout/Content'
import { EMPTY_PAGE_LOGO_ENUM } from '../../../helpers/enums'
import { EmptyPageLogo } from '../../../mini-components/EmptyPageLogo'

export const ReactIndex = () => {
    // return <EmptyPageLogo icon={EMPTY_PAGE_LOGO_ENUM.REACT} />
    return (
        <Content>
            <h1>
                React&nbsp;
                <a href="https://reactjs.org/" target="_blank">
                    📚
                </a>
            </h1>
            <p>A JavaScript library for building user interfaces</p>
        </Content>
    )
}
