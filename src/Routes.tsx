import { Routes, Route } from 'react-router-dom'
import { GitNotes } from './modules/git/GitNotes'
import { Home } from './modules/home/Home'
import { ReactNotes } from './modules/react/ReactNotes'
import { GitIndex } from './modules/git/pages/GitIndex'
import { HomeIndex } from './modules/home/pages/HomeIndex'
import { ReactIndex } from './modules/react/pages/ReactIndex'
import { GitRoutes } from './data-center/GitRoutes'
import { ReactRoutes } from './data-center/ReactRoutes'
import { NodejsRoutes } from './data-center/NodejsRoutes'
import { NodejsNotes } from './modules/nodejs/NodejsNotes'
import { NodeIndex } from './modules/nodejs/pages/NodeIndex'
import { UbuntuRoutes } from './data-center/UbuntuRoutes'
import { UbuntuNotes } from './modules/ubuntu/UbuntuNotes'
import { UbuntuIndex } from './modules/ubuntu/pages/UbuntuIndex'
import { JsNotes } from './modules/js/JsNotes'
import { JsIndex } from './modules/js/pages/JsIndex'
import { JsRoutes } from './data-center/JSRoutes'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />}>
                <Route path="" element={<HomeIndex />} />
            </Route>
            <Route path="/git/*" element={<GitNotes />}>
                <Route path="" element={<GitIndex />} />
                {GitRoutes.map((route) => (
                    <Route key={route.id} path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/ubuntu/*" element={<UbuntuNotes />}>
                <Route path="" element={<UbuntuIndex />} />
                {UbuntuRoutes.map((route) => (
                    <Route key={route.id} path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/js/*" element={<JsNotes />}>
                <Route path="" element={<JsIndex />} />
                {JsRoutes.map((route) => (
                    <Route key={route.id} path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/react/*" element={<ReactNotes />}>
                <Route path="" element={<ReactIndex />} />
                {ReactRoutes.map((route) => (
                    <Route key={route.id} path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/nodejs/*" element={<NodejsNotes />}>
                <Route path="" element={<NodeIndex />} />
                {NodejsRoutes.map((route) => (
                    <Route key={route.id} path={route.route} element={route.component} />
                ))}
            </Route>
        </Routes>
    )
}
