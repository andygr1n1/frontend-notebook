import { Module } from '../../layout/Module'
import { NodejsRoutes } from '../../data-center/NodejsRoutes'

export const NodejsNotes = () => {
    return <Module routes={NodejsRoutes} />
}
