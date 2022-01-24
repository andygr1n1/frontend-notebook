import { ChangeBranchName } from '../modules/git/pages/ChangeBranchName'
import { ChangeRemoteRepository } from '../modules/git/pages/ChangeRemoteRepository'
import { CleanUpRemoteBranch } from '../modules/git/pages/CleanUpRemoteBranch'
import { DeleteBranch } from '../modules/git/pages/DeleteBranch'
import { DeleteCommit } from '../modules/git/pages/DeleteCommit'
import { GitApps } from '../modules/git/pages/GitApps'
import { GitTutorials } from '../modules/git/pages/GitTutorials'
import { RewritingHistory } from '../modules/git/pages/RewritingHistory'
import { Stash } from '../modules/git/pages/Stash'

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