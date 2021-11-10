import { Routes, Route } from 'react-router-dom'
import { Git } from './modules/git/GitNotebook'
import { Stash } from './modules/git/Stash'
import { Home } from './modules/home/Home'
import { ReactNotebook } from './modules/react/ReactNotebook'
import { ReactRouter6 } from './modules/react/ReactRouter6'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/git/*" element={<Git />}>
                <Route path="stash" element={<Stash />} />
            </Route>
            <Route path="/react/*" element={<ReactNotebook />}>
                <Route path="react-router-6" element={<ReactRouter6 />} />
            </Route>
        </Routes>
    )
}
