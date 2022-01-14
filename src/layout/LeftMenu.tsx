import type { IRoute } from '../helpers/types'
import { LeftMenuLink } from '../mini-components/LeftMenuLink'

export const LeftMenu: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
    return (
        <ul className="relative w-[320px] py-10 pl-10 pr-5 overflow-auto marker:text-primary-color list-disc animate-fade-in-down">
            {routes.map(({ route, title }) => (
                <LeftMenuLink key={route} route={route} title={title} />
            ))}
        </ul>
    )
}
