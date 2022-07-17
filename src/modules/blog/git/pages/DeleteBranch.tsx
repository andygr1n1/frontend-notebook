import { Content } from '../../../../layout/Content'
import { Code } from '../../../../mini-components/Code'

export const DeleteBranch = () => {
    return (
        <Content>
            <h1>How to Delete a Git Branch</h1>
            <p>
                <i>//delete branch locally:</i>{' '}
                <Code code={'git branch -d localBranchName'} /> <br />{' '}
                <i>//delete branch locally:</i>
                <Code code={'git push origin --delete remoteBranchName'} />
            </p>

            <h2>Deleting a branch LOCALLY</h2>
            <p>
                Delete a branch with
                <Code code={'git branch -d localBranchName'} />
            </p>
            <p>
                The <b>-d</b> option will delete the branch only if it has already been
                pushed and merged with the remote branch. Use <b>-D</b> instead if you
                want to force the branch to be deleted, even if it hasn't been pushed or
                merged yet.
            </p>
            <h2>Deleting a branch REMOTELY</h2>
            <p>
                Deleting a branch REMOTELY
                <Code code={'git push origin --delete remoteBranchName'} />
            </p>
            <p>
                You can also use this shorter command to delete a branch remotely:
                <Code code={'git push origin :fix/authentication'} />
            </p>
            <p>
                Try to synchronize your branch list using:
                <Code code={'git fetch -p'} />
            </p>
            <p>
                The <b>-p</b> flag means "prune". After fetching, branches which no longer
                exist on the remote will be deleted.
            </p>
        </Content>
    )
}
