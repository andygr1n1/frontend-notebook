import { Code } from '../../../mini-components/Code'

export const RewritingHistory = () => {
    return (
        <>
            <h1>Способы изменения истории коммитов:</h1>
            <h2>--amend</h2>
            <p>
                Самый простой способ изменить название последнего коммита, при работе с
                локальным репозиторием - это воспользоваться командой:
                <Code code={'git commit --amend'} />
            </p>
            <h2>-i rebase</h2>
            <p>
                <img src="https://drive.google.com/uc?export=view&id=1iv8tWAZ5lkC6LZXlmjZzGx04ldQ8vNKx" />
            </p>
            <p>
                Do NOT use Interactive Rebase on commits that you've already pushed on a
                remote repository
            </p>
            <p>
                Use it for cleaning up your local commit history before mergin it into a
                shared team branch
            </p>
            <p>
                <Code code={'git rebase -i HEAD~3'} />
            </p>
        </>
    )
}
