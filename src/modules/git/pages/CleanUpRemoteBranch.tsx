import { Code } from '../../../mini-components/Code'

export const CleanUpRemoteBranch = () => {
    return (
        <>
            <h1>Clean up remote branch</h1>
            <p>
                Consider to run <Code code={'git fetch --prune'} /> On a regular basis in
                each repo to remove local branches that have been tracking a remote branch
                that is deleted (no longer exists in remote GIT repo).
            </p>
            <p>
                This can be further simplified by:
                <Code code={'git config remote.origin.prune true'} />
                .This is a per-repo setting that will make any future git fetch or git
                pull to automatically prune.
            </p>
            <p>
                To set this up for your user, you may also edit the global .gitconfig and
                add <Code code={'git config --global fetch.prune true'} /> or
                <Code code={'git config --system fetch.prune true'} />
            </p>
        </>
    )
}
