import { Routes, Route } from 'react-router-dom'
import { Git } from './modules/git/Git'
import { Stash } from './modules/git/pages/Stash'
import { CleanUpRemoteBranch } from './modules/git/pages/CleanUpRemoteBranch'
import { Home } from './modules/home/Home'
import { ReactNotebook } from './modules/react/ReactNotebook'
import { ReactRouter6 } from './modules/react/ReactRouter6'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/git/*" element={<Git />}>
                <Route path="stash" element={<Stash />} />
                <Route path="clean_up_remote_branch" element={<CleanUpRemoteBranch />} />
            </Route>
            <Route path="/react/*" element={<ReactNotebook />}>
                <Route path="react-router-6" element={<ReactRouter6 />} />
            </Route>
        </Routes>
    )
}
