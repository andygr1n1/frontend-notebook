import { RedChalk, GreenChalk } from '../../../mini-components/chalks'
import { Code } from '../../../mini-components/Code'
import { Dashboard } from '../../../mini-components/Dashboard'

export const ReactRouter6 = () => {
    return (
        <>
            <h1>React router 6</h1>
            <p>
                In version 5, we used <RedChalk string="Switch" /> component to wrap our
                Routes and make sure only one Route is loaded at the same time.
            </p>
            <p>
                In <GreenChalk string="React Router 6" /> <RedChalk string="Switch " />
                doesn't exist anymore. now it becomes <GreenChalk string="Routes" />.
                <Dashboard>
                    <Code code="<Routes>" />
                </Dashboard>
            </p>
        </>
    )
}
