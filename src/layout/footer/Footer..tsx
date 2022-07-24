import { useLocation } from 'react-router-dom'
import { SocialIcons } from '../../components/SocialIcons'

export const Footer: React.FC = () => {
    const location = useLocation()
    if (location.pathname.includes('/blog')) return null

    return (
        <div className="mt-20 flex flex-col items-center justify-center gap-5 py-2">
            <ul className="flex gap-5">
                <li>About</li>
                <li>Contacts</li>
                <li>Policy</li>
                <li>Terms & Conditions </li>
            </ul>
            <SocialIcons />
            <div className="select-none">Copyright© 2023 Andrei Grini</div>
        </div>
    )
}
