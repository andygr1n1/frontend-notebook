import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

export const SocialIcons: React.FC = () => {
    return (
        <div className="flex gap-3">
            <a
                href="https://github.com/andygr1n1"
                target="_blank"
                title={'github'}
                className="h-8 w-8 rounded-lg transition-colors">
                <GitHubIcon className="!h-8 !w-8 !text-2xl !text-text-color transition-colors hover:!text-red-700" />
            </a>
            <a
                href="https://www.linkedin.com/in/andrew-grini/"
                target="_blank"
                title={'linkedin'}
                className="h-8 w-8 rounded-lg transition-colors">
                <LinkedInIcon className="!h-8 !w-8 !text-2xl !text-text-color transition-colors hover:!text-red-700" />
            </a>
            <a
                href="https://twitter.com/andygrini"
                target="_blank"
                title={'twitter'}
                className="h-8 w-8 rounded-lg transition-colors">
                <TwitterIcon className="!h-8 !w-8 !text-2xl !text-text-color transition-colors hover:!text-red-700" />
            </a>
        </div>
    )
}
