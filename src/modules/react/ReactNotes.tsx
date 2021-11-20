import { Module } from '../../layout/Module'
import { reactRoutes } from '../../local-db/react_routes'

export const ReactNotes = () => {
    return <Module routes={reactRoutes} />
}
