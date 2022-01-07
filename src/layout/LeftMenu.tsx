import { IRoute } from '../helpers/types'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'

export const LeftMenu: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <ul className="relative w-80 py-10 pl-10 pr-5 overflow-auto border-r border-primary-color border-opacity-10 marker:text-primary-color list-disc">
            {routes.map(({ route, title }) => (
                <LeftMenuLink key={route} route={route} title={title} />
            ))}
        </ul>
    )
}
