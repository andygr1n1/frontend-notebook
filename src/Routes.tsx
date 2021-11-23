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
import { InteractiveRebase } from './modules/git/pages/InteractiveRebase'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />}>
                <Route path="" element={<HomeIndex />} />
            </Route>
            <Route path="/git/*" element={<GitNotes />}>
                <Route path="" element={<GitIndex />} />
                <Route path="stash" element={<Stash />} />
                <Route path="clean_up_remote_branch" element={<CleanUpRemoteBranch />} />
                <Route path="interactive_rebase" element={<InteractiveRebase />} />
            </Route>
            <Route path="/react/*" element={<ReactNotes />}>
                <Route path="" element={<ReactIndex />} />
                <Route path="react-router-6" element={<ReactRouter6 />} />
            </Route>
        </Routes>
    )
}
