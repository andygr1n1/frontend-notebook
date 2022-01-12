import type { IRoute } from '../helpers/types'
import { ChangeBranchName } from '../modules/git/pages/ChangeBranchName'
import { ChangeRemoteRepository } from '../modules/git/pages/ChangeRemoteRepository'
import { CleanUpRemoteBranch } from '../modules/git/pages/CleanUpRemoteBranch'
import { DeleteBranch } from '../modules/git/pages/DeleteBranch'
import { DeleteCommit } from '../modules/git/pages/DeleteCommit'
import { GitApps } from '../modules/git/pages/GitApps'
import { GitTutorials } from '../modules/git/pages/GitTutorials'
import { RewritingHistory } from '../modules/git/pages/RewritingHistory'
import { Stash } from '../modules/git/pages/Stash'
import { v4 as uuid } from 'uuid'

export const GitRoutes: IRoute[] = [
    { id: uuid(), route: 'stash', title: 'Stash', component: <Stash /> },
    {
        id: uuid(),
        route: 'delete_commit',
        title: 'Delete Commit',
        component: <DeleteCommit />,
    },
    {
        id: uuid(),
        route: 'clean_up_remote_branch',
        title: 'Clean up remote branch',
        component: <CleanUpRemoteBranch />,
    },
    {
        id: uuid(),
        route: 'rewriting_history',
        title: 'Rewriting history',
        component: <RewritingHistory />,
    },
    {
        id: uuid(),
        route: 'change_branch_name',
        title: '🈴 Change branch name',
        component: <ChangeBranchName />,
    },
    {
        id: uuid(),
        route: 'delete_branch',
        title: '🚮 Delete branch',
        component: <DeleteBranch />,
    },
    {
        id: uuid(),
        route: 'change_remote_repository',
        title: 'Change remote repository',
        component: <ChangeRemoteRepository />,
    },
    { id: uuid(), route: 'git-apps', title: '🔖 Apps', component: <GitApps /> },
    {
        id: uuid(),
        route: 'git-tutorials',
        title: '🎬 Git tutorials',
        component: <GitTutorials />,
    },
]
