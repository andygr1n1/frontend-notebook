import { gitRoutes } from '../../local-db/git_routes'
import { Module } from '../../layout/Module'

export const GitNotes = () => {
    return <Module routes={gitRoutes} />
}
