import { ChangeBranchName } from '../modules/blog/git/pages/ChangeBranchName'
import { ChangeRemoteRepository } from '../modules/blog/git/pages/ChangeRemoteRepository'
import { CleanUpRemoteBranch } from '../modules/blog/git/pages/CleanUpRemoteBranch'
import { DeleteBranch } from '../modules/blog/git/pages/DeleteBranch'
import { DeleteCommit } from '../modules/blog/git/pages/DeleteCommit'
import { GitApps } from '../modules/blog/git/pages/GitApps'
import { GitTutorials } from '../modules/blog/git/pages/GitTutorials'
import { RewritingHistory } from '../modules/blog/git/pages/RewritingHistory'
import { Stash } from '../modules/blog/git/pages/Stash'

export const GitRoutesComponents: React.FC<{ route: string }> = ({ route }) => {
    if (route === 'stash') return <Stash />
    if (route === 'delete_commit') return <DeleteCommit />
    if (route === 'clean_up_remote_branch') return <CleanUpRemoteBranch />
    if (route === 'rewriting_history') return <RewritingHistory />
    if (route === 'change_branch_name') return <ChangeBranchName />
    if (route === 'delete_branch') return <DeleteBranch />
    if (route === 'change_remote_repository') return <ChangeRemoteRepository />
    if (route === 'git_apps') return <GitApps />
    if (route === 'git_tutorials') return <GitTutorials />
    return null
}