import { ReactRouter6 } from '../modules/blog/react/pages/ReactRouter6'

export const ReactRoutesComponents: React.FC<{ route: string }> = ({ route }) => {
    if (route === 'react_router_6') return <ReactRouter6 />
    return null
}
