import { Content } from '../../../../layout/Content'
import { Code } from '../../../../mini-components/Code'

export const ChangeBranchName = () => {
    return (
        <Content>
            <h1>Изменение названия ветки</h1>
            <h2>Локально</h2>
            <p>
                <Code code={'git branch -m new_branch_name'} /> – переименовать локальную
                ветку
            </p>
            <h2>Удалённо</h2>
            <p>
                <Code code={'git push origin :old_branch'} /> – удалить старую ветку
                удаленно ветку
            </p>
            <p>
                <Code code={'git push --set-upstream origin new_branch_name'} /> –
                выгрузить новую ветку и "закрепить" ее за локальной веткой
            </p>
        </Content>
    )
}
