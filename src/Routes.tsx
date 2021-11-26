import { Routes, Route } from 'react-router-dom'
import { GitNotes } from './modules/git/GitNotes'
import { Stash } from './modules/git/pages/Stash'
import { CleanUpRemoteBranch } from './modules/git/pages/CleanUpRemoteBranch'
import { Home } from './modules/home/Home'
import { ReactNotes } from './modules/react/ReactNotes'
import { ReactRouter6 } from './modules/react/pages/ReactRouter6'
import { GitIndex } from './modules/git/pages/GitIndex'
import { HomeIndex } from './modules/home/pages/HomeIndex'
import { ReactIndex } from './modules/react/pages/ReactIndex'
import { RewritingHistory } from './modules/git/pages/RewritingHistory'
import { GitRoutes } from './data-center/GitRoutes'
import { ReactRoutes } from './data-center/ReactRoutes'
import { NodejsRoutes } from './data-center/NodejsRoutes'
import { NodejsNotes } from './modules/nodejs/NodejsNotes'
import { NodeIndex } from './modules/nodejs/pages/NodeIndex'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />}>
                <Route path="" element={<HomeIndex />} />
            </Route>
            <Route path="/git/*" element={<GitNotes />}>
                <Route path="" element={<GitIndex />} />
                {GitRoutes.map((route) => (
                    <Route path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/react/*" element={<ReactNotes />}>
                <Route path="" element={<ReactIndex />} />
                {ReactRoutes.map((route) => (
                    <Route path={route.route} element={route.component} />
                ))}
            </Route>
            <Route path="/nodejs/*" element={<NodejsNotes />}>
                <Route path="" element={<NodeIndex />} />
                {NodejsRoutes.map((route) => (
                    <Route path={route.route} element={route.component} />
                ))}
            </Route>
        </Routes>
    )
}
