import { DeleteOutlined } from '@ant-design/icons'
import { IRoute } from '../helpers/types'
import { ChangeBranchName } from '../modules/git/pages/ChangeBranchName'
import { ChangeRemoteRepository } from '../modules/git/pages/ChangeRemoteRepository'
import { CleanUpRemoteBranch } from '../modules/git/pages/CleanUpRemoteBranch'
import { DeleteBranch } from '../modules/git/pages/DeleteBranch'
import { RewritingHistory } from '../modules/git/pages/RewritingHistory'
import { Stash } from '../modules/git/pages/Stash'

export const GitRoutes: IRoute[] = [
    { route: 'stash', title: 'Stash', component: <Stash /> },
    {
        route: 'clean_up_remote_branch',
        title: 'Clean up remote branch',
        component: <CleanUpRemoteBranch />,
    },
    {
        route: 'rewriting_history',
        title: 'Rewriting history',
        component: <RewritingHistory />,
    },
    {
        route: 'change_branch_name',
        title: '🈴 Change branch name',
        component: <ChangeBranchName />,
    },
    {
        route: 'delete_branch',
        title: '🚮 Delete branch',
        component: <DeleteBranch />,
    },
    {
        route: 'change_remote_repository',
        title: 'Change remote repository',
        component: <ChangeRemoteRepository />,
    },
]
