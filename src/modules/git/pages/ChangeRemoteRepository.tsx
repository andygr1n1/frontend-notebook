import { Code } from '../../../mini-components/Code'

export const ChangeRemoteRepository = () => {
    return (
        <>
            <h1>Change a remote Git repository:</h1>
            <p>
                To list the existing remotes we open the terminal and type in the
                following command: <Code code={'git remote -v'} />
            </p>
            <p>
                We can change the remote repository by using git remote set-url command:
            </p>
            <p>
                <Code
                    code={
                        'git remote set-url origin git@your.git.repo.example.com:user/repository2.git'
                    }
                />
            </p>
        </>
    )
}