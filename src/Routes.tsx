import { Routes, Route } from 'react-router-dom'
import { GitNotes } from './modules/blog/git/GitNotes'
import { GlobalSearch } from './modules/blog/global-search/GlobalSearch'
import { ReactNotes } from './modules/blog/react/ReactNotes'
import { GitIndex } from './modules/blog/git/pages/GitIndex'
import { GlobalSearchIndex } from './modules/blog/global-search/components/GlobalSearchIndex'
import { ReactIndex } from './modules/blog/react/pages/ReactIndex'
import { GitRoutesComponents } from './routes-components/GitRoutesComponents'
import { NodejsNotes } from './modules/blog/nodejs/NodejsNotes'
import { NodeIndex } from './modules/blog/nodejs/pages/NodeIndex'
import { LinuxNotes } from './modules/blog/linux/LinuxNotes'
import { LinuxIndex } from './modules/blog/linux/pages/LinuxIndex'
import { JsNotes } from './modules/blog/js/JsNotes'
import { JsIndex } from './modules/blog/js/pages/JsIndex'
import { CssNotes } from './modules/blog/css/CssNotes'
import { CssIndex } from './modules/blog/css/pages/CssIndex'
import { useRootStore } from './StoreProvider'
import { JsRoutesComponents } from './routes-components/JsRoutesComponents'
import { CssRoutesComponents } from './routes-components/CssRoutesComponents'
import { CATALOG_ROUTE, GLOBAL_ROUTE } from './helpers/enums'
import { LinuxRoutesComponents } from './routes-components/LinuxRoutesComponents'
import { ReactRoutesComponents } from './routes-components/ReactRoutesComponents'
import { NodejsRoutesComponents } from './routes-components/NodejsRoutesComponents'
import { Home } from './modules/home/Home'
import { About } from './modules/about/About'
import { Contacts } from './modules/contacts/Contacts'
import { Cv } from './modules/cv/Cv'
import { Blog } from './modules/blog/Blog'

export const AppRoutes = () => {
    const {
        catalogs$: { getCatalog },
    } = useRootStore()

    return (
        <Routes>
            <Route path="/*" element={<Home />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path={`/${GLOBAL_ROUTE.HOME}`} element={<Home />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path={`/${GLOBAL_ROUTE.ABOUT}`} element={<About />}>
                <Route path="" element={<About />} />
            </Route>
            <Route path={`/${GLOBAL_ROUTE.CONTACTS}`} element={<Contacts />}>
                <Route path="" element={<Contacts />} />
            </Route>
            <Route path={`/${GLOBAL_ROUTE.CV}`} element={<Cv />}>
                <Route path="" element={<Cv />} />
            </Route>
            <Route path={`/${GLOBAL_ROUTE.BLOG}`} element={<Blog />}>
                <Route path="" element={<Blog />} />
            </Route>

            <Route path={`/${CATALOG_ROUTE.SEARCH}/*`} element={<GlobalSearch />}>
                <Route path="" element={<GlobalSearchIndex />} />
            </Route>
            <Route path={`/${CATALOG_ROUTE.GIT}/*`} element={<GitNotes />}>
                <Route path="" element={<GitIndex />} />
                {getCatalog(CATALOG_ROUTE.GIT)?.sub_routes.map(
                    ({ sub_route: route, id }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<GitRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
            <Route path={`/${CATALOG_ROUTE.LINUX}/*`} element={<LinuxNotes />}>
                <Route path="" element={<LinuxIndex />} />
                {getCatalog(CATALOG_ROUTE.LINUX)?.sub_routes.map(
                    ({ id, sub_route: route }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<LinuxRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
            <Route path={`/${CATALOG_ROUTE.JS}/*`} element={<JsNotes />}>
                <Route path="" element={<JsIndex />} />
                {getCatalog(CATALOG_ROUTE.JS)?.sub_routes.map(
                    ({ id, sub_route: route }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<JsRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
            <Route path={`/${CATALOG_ROUTE.REACT}/*`} element={<ReactNotes />}>
                <Route path="" element={<ReactIndex />} />
                {getCatalog(CATALOG_ROUTE.REACT)?.sub_routes.map(
                    ({ id, sub_route: route }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<ReactRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
            <Route path={`/${CATALOG_ROUTE.NODEJS}/*`} element={<NodejsNotes />}>
                <Route path="" element={<NodeIndex />} />
                {getCatalog(CATALOG_ROUTE.NODEJS)?.sub_routes.map(
                    ({ id, sub_route: route }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<NodejsRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
            <Route path={`/${CATALOG_ROUTE.CSS}/*`} element={<CssNotes />}>
                <Route path="" element={<CssIndex />} />
                {getCatalog(CATALOG_ROUTE.CSS)?.sub_routes.map(
                    ({ id, sub_route: route }) => (
                        <Route
                            key={id}
                            path={route}
                            element={<CssRoutesComponents route={route} />}
                        />
                    ),
                )}
            </Route>
        </Routes>
    )
}
