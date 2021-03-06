import { Content } from '../../../layout/Content'
export const NodeIndex = () => {
    // return <EmptyPageLogo icon={EMPTY_PAGE_LOGO_ENUM.REACT} />
    return (
        <Content>
            <h1>
                About Node.js®&nbsp;
                <a href="https://nodejs.org/en/" target="_blank">
                    📚
                </a>
            </h1>
            <p className="text-red-500">
                As an asynchronous event-driven JavaScript runtime, Node.js is designed to
                build scalable network applications.{' '}
            </p>
        </Content>
    )
}
