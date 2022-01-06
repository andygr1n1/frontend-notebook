import { Content } from '../../../layout/Content'
import { Code } from '../../../mini-components/Code'

export const GitApps = () => {
    return (
        <Content>
            <h1>Git apps🔖</h1>
            <p>
                //<b>gitg</b> is the GNOME GUI client to view git repositories.{' '}
                <Code code={'gitg'} />
            </p>
        </Content>
    )
}
