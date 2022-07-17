import { Content } from '../../../../layout/Content'
import { UpIconSold } from '../../../../assets/icons/UpIconSolid'
import { Paragraph } from '../../../../layout/Paragraph'
import { AnchorMenu } from '../../../../layout/AnchorMenu'

const anchors = [
    { id: 'to-top', title: 'To top' },
    { id: 'dom', title: 'DOM' },
    { id: 'scope', title: 'Scope' },
    { id: 'hoisting', title: 'Hoisting' },
    { id: 'propagation', title: 'Event Propagation' },
    { id: 'delegation', title: 'Event Delegation' },
    { id: 'hoc', title: 'High Order Components (HOC)' },
]

export const JsSkillUp = () => {
    return (
        <>
            <Content>
                <h1 id="to-top" className="flex items-center gap-5">
                    Skill UP <UpIconSold className="h-12 w-12" />
                </h1>
                <h2 id="dom">JS DOM</h2>
                <Paragraph>
                    JS DOM – Document Object Model. Browser creates a Document Object
                    Model in computer memory, based on HTML code from server.
                </Paragraph>
                <Paragraph>
                    Dom is a set of binded objects. it is an interface that helps
                    JavaScript to make actions on page.
                </Paragraph>
                <h2 id="scope">Scope</h2>
                <Paragraph>
                    Scope is a place where we hace access to vatiables and functions In JS
                    we define 3 scopes:
                    <ol className="list-disc px-5 pt-5">
                        <li>Global Scope</li>
                        <li>Functional Scope</li>
                        <li>
                            Blocked Scope→inside <em>&#x7b; &#125;</em>
                        </li>
                    </ol>
                </Paragraph>
                <h2 id="hoisting">Hoisting</h2>
                <Paragraph>
                    Hoisting is a JavaScript mechanism where variables and function
                    declarations are moved to the top of their scope before code
                    execution.
                </Paragraph>
                <h2 id="propagation">Event Propagation</h2>
                <Paragraph>
                    Mechanism that triggers on any document event. Event starts from
                    document.window, through all children and finishes on the caller
                    element. Important to understand that this mechanism consistently
                    affects all ancestors.
                    <ol className="list-decimal px-5 pt-5">
                        <li>Capturing</li>
                        <li>
                            Targeting→<em>event target (stopPropagation())</em>
                        </li>
                        <li>
                            Bubbling→
                            <em>
                                the event returns to Window, triggering the event on
                                anchestor elements
                            </em>
                        </li>
                    </ol>
                </Paragraph>
                <h2 id="delegation">Event Delegation</h2>
                <Paragraph>EventListener on the parent</Paragraph>
                <h2 id="hoc">High Order Functions</h2>
                <Paragraph>
                    High order functions return other functions. They can bring functions
                    as an argument. In Vanilla JS HOC {'->'} .map,.filter, forEach, etc
                </Paragraph>
            </Content>
            <AnchorMenu anchors={anchors} />
        </>
    )
}
