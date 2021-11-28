import { RedChalk, GreenChalk } from '../../../mini-components/chalks'
import { Code } from '../../../mini-components/Code'
import { Dashboard } from '../../../mini-components/Dashboard'
import { Paragraph } from '../../../layout/Paragraph'
import { YoutubeOutlined, SlackOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

export const ReactRouter6 = () => {
    return (
        <>
            <h1>React router 6</h1>
            <Paragraph>
                In version 5, we used <RedChalk string="Switch" /> component to wrap our
                Routes and make sure only one Route is loaded at the same time.
            </Paragraph>
            <Paragraph>
                In <GreenChalk string="React Router 6" /> <RedChalk string="Switch " />
                doesn't exist anymore. now it becomes <GreenChalk string="Routes" />.
                <Dashboard>
                    <Code code="<Routes>" />
                </Dashboard>
            </Paragraph>
            <Paragraph>
                We still import <GreenChalk string="BrowserRouter" /> from
                <Code code="react-router-dom." />
                <Dashboard>
                    <Code code={'<BrowserRouter>\n    <App/>\n<BrowserRouter/>'} />
                </Dashboard>
            </Paragraph>
            <Paragraph>
                On <GreenChalk string="Route " />
                we add the <GreenChalk string="element " />
                prop and pass the dynamic value as JSX.
                <Dashboard>
                    <Code
                        code={
                            '<Routes>\n    <Route path="/welcome" element={<Welcome />} />\n    <Route path="/products" element={<Products />} />\n    <Route path="/products/:productId" element={<ProductDetail />} />\n<Routes/>'
                        }
                    />
                </Dashboard>
            </Paragraph>
            <Paragraph>That is not all you should know about v6.</Paragraph>
            <Paragraph>
                In adition to this changes, there are internal changes. Specificly the
                internal logic for evaluating these paths and picking a route to load
                changed. We do not need <RedChalk string="exact" /> anymore.
            </Paragraph>
            <Paragraph>
                It now always looks for the exact maches if you define your paths like
                this. So we can remove <RedChalk string="exact" /> from v6.
            </Paragraph>
            <Paragraph>
                If you still want the behavior of mathich the start of a path only, just
                add <RedChalk string="/*" /> to your path. Once you add that, your route
                will become active if a url starts with <GreenChalk string="/products " />
                instead to be only <GreenChalk string="/products " />
            </Paragraph>
            <Paragraph>The Order of Routes doesn't metter anymore.</Paragraph>
            <h2>NavLink</h2>
            <Paragraph>
                In NavLink className takes a function that gives us the current state of
                navigation.
                <Dashboard>
                    <Code
                        code={
                            '<NavLink className={(navData) => {navData.isActive "" ? : ""}}>\n    Welcome\n<NavLink/>'
                        }
                    />
                </Dashboard>
            </Paragraph>
            <h2>useParams</h2>
            <Paragraph>
                useParams stays the same.
                <Dashboard>
                    <Code code={'import {useParams} from "react-router-dom"'} />
                    <br />
                    <br />
                    <Code code={'const params = useParams()'} />
                    <br />
                    <br />
                    <Code code={'<p>{params.productId}</p>'} />
                </Dashboard>
            </Paragraph>
            <h2>Redirect</h2>
            <Paragraph>
                Redirect is <GreenChalk string="Navigate" />
                <Dashboard>
                    <Code
                        code={'<Route path="/" element={<Navigate to="/welcome" />} />'}
                    />
                </Dashboard>
                Now we push. But if we trully want to redirect (replace the current page
                with the new page, then we have to add the{' '}
                <GreenChalk string="replace " />
                prop to navigate as well )
                <Dashboard>
                    <Code
                        code={
                            '<Route path="/" element={<Navigate replace to="/welcome" />} />'
                        }
                    />
                </Dashboard>
            </Paragraph>
            <h2>Nested Routes</h2>
            <Paragraph>
                We must wrap nested <GreenChalk string="<Route> " /> with{' '}
                <GreenChalk string="<Routes> " />
            </Paragraph>
            <Paragraph>
                We don't need to repeat the entire path for nested Routes.
                <Dashboard>
                    <Code
                        code={
                            '<Routes>\n    <Route path="/welcome" element={<Welcome />} />\n    <Route path="/products" element={<Products />} />\n    <Route path="/products/:productId" element={<ProductDetail />} />\n<Routes/>'
                        }
                    />
                    <br />
                    <br />
                    <br />
                    Expect that next Route is inside Welcome.tsx
                    <br />
                    <br />
                    // welcome/new-user
                    <br />
                    <Code
                        code={
                            '<Routes>\n    <Route path="/new-user" element={<Welcome />} />\n<Routes/>'
                        }
                    />
                    <br />
                </Dashboard>
            </Paragraph>
            <Paragraph>
                <GreenChalk string="Link " /> will also have relative path
            </Paragraph>
            <h2>Nested Routes - another approach</h2>
            <Paragraph>
                Instead of defining the routes in the component where we want to load the
                nested route, you can also go for a different approach.
            </Paragraph>
            <Paragraph>
                Let's go to the Routes Route Component and nest the routes right here. All
                our Routes will be in one place!
                <Dashboard>
                    <Code
                        code={
                            '<Routes>\n    <Route path="/welcome" element={<Welcome />} >\n        <Route path="/welcome" element={<Welcome />} />\n    </Route>\n    <Route path="/products" element={<Products />} />\n    <Route path="/products/:productId" element={<ProductDetail />} />\n<Routes/>'
                        }
                    />
                </Dashboard>
                <br />
                <br />
                But if you will think a bit, there is a problem. It is not clear where
                precisely the component should be inserted in the component. To resolve
                this issue we have a new component from{' '}
                <GreenChalk string="react-router-dom. " /> The name is{' '}
                <GreenChalk string="Outlet " />. It is a placeholder telling React where
                nested Routes will be rendered.
                <Dashboard>
                    <Code code={'import { Link, Outlet } from "react-router-dom"'} />
                    <br />
                    <br />
                    <Code
                        code={
                            '<section>\n    <h1>The Welcome Page></h1>\n    <Link to="new-user">New User</Link>\n   <Outlet> />\n<section/>'
                        }
                    />
                </Dashboard>
            </Paragraph>
            <h2>useHistory</h2>
            <Paragraph>
                <RedChalk string="useHistory " />
                doen't exist anymore. It was replaced by
                <GreenChalk string=" useNavigate " />
                hook.
                <Dashboard>
                    <Code code={'import { useNavigate } from "react-router-dom"'} />
                    <br />
                    <br />
                    <Code code={'const navigate = useNavigate();'} />
                </Dashboard>
                <br />
                <br />
                At this step we can navigate <GreenChalk string="programmatically." />
                <Dashboard>
                    <Code code={'navigate("/welcome")'} />
                </Dashboard>
                <br />
                <br />
                If you want to redirect:
                <Dashboard>
                    <Code code={'navigate("/welcome", {replace: true})'} />
                </Dashboard>
                <br />
                <br />
                And we can pass numbers to go up or down
                <Dashboard>
                    <Code code={'navigate(-1, {replace: true})'} />
                </Dashboard>
            </Paragraph>
            <Paragraph>
                <div className="flex justify-center gap-10px w-full">
                    <Tooltip placement={'bottom'} title="Youtube Tutorial">
                        <a
                            href="https://www.youtube.com/watch?v=zEQiNFAwDGo"
                            target="_blank">
                            <YoutubeOutlined className="font-50px cursor-pointer" />
                        </a>
                    </Tooltip>
                    <Tooltip placement={'bottom'} title="React Router 6">
                        <a href="https://reactrouter.com/docs/en/v6" target="_blank">
                            <SlackOutlined className="font-50px cursor-pointer" />
                        </a>
                    </Tooltip>
                </div>
            </Paragraph>
        </>
    )
}
