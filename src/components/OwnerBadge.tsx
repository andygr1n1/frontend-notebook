import { SocialIcons } from './SocialIcons'
import myPhoto from '../assets/andygr1ni_photo.jpg'

export const OwnerBadge: React.FC = () => {
    return (
        <div className="flex h-fit w-fit justify-center rounded-lg shadow-md">
            <div className="flex h-96  w-72 flex-col items-center justify-center gap-4 rounded-lg bg-[color:var(--owner-badge-bg)] p-4 text-[color:var(--owner-badge-text-color)]">
                <img src={myPhoto} className="h-52 w-52 rounded-full" />
                <div className="font-bold">Andrei Grini</div>
                <div className="font-bold">Web developer</div>
                <SocialIcons />
            </div>
        </div>
    )
}
