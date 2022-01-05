import { createContext, useContext } from 'react'
import { IRoot$ } from './mst/types'
import { Root$ } from './mst/stores/Root.store'

const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create()

const rootStore$ = generateRoot$()

export const StoreProvider: React.FC = ({ children }) => {
    return <storeContext.Provider value={rootStore$}>{children}</storeContext.Provider>
}

export const useRootStore = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}