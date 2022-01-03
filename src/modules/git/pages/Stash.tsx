import { AnchorMenu } from '../../../layout/AnchorMenu'
import { Code } from '../../../mini-components/Code'

const anchors = [
    { id: 'git-stash-start', title: 'To top' },
    { id: 'git-stash', title: 'Git stash' },
    { id: 'git-stash-save', title: 'Git stash save' },
    { id: 'git-stash-list', title: 'Git stash list' },
    { id: 'git-stash-apply', title: 'Git stash apply' },
    { id: 'git-stash-pop', title: 'Git stash pop' },
    { id: 'git-stash-show', title: 'Git stash show' },
    { id: 'git-stash-branch', title: 'Git stash branch #name' },
    { id: 'git-stash-drop', title: 'Git stash drop' },
    { id: 'git-stash-clear', title: 'Git stash clear' },
]

export const Stash = () => {
    return (
        <div>
            <AnchorMenu anchors={anchors} />
            <h1 id="git-stash-start">
                Git stash - hide the changes
                <a
                    href="https://pingvinus.ru/git/1718#:~:text=%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%20git%20stash%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BD%D0%B0%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B0%20%D0%B4%D0%BB%D1%8F,%D0%BF%D0%BE%D1%82%D0%BE%D0%BC%20%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%B1%D1%8B%D0%BB%D0%BE%20%D0%B8%D1%85%20%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C."
                    target="_blank">
                    📚
                </a>
            </h1>
            <p>
                Команда git stash предназначена для того, чтобы поместить текущие
                изменения, которые вы выполнили в файлах, в отдельное хранилище, и вернуть
                файлы к исходному состоянию. То есть git stash прячет изменения в файлах и
                сохраняет эти изменения отдельно, чтобы потом можно было их вернуть.
            </p>
            <h2 id="git-stash">Git stash</h2>
            <p>
                Чтобы спрятать изменения достаточно выполнить команду:
                <Code code={'git stash'} />
            </p>
            <h2 id="git-stash-save">Git stash save</h2>
            <p>
                Команда git stash save выполняет то же самое, что и git stash, но имеет
                несколько полезных опций. Например, можно сохранить изменения и добавить
                сообщение — подписать изменения, чтобы потом вспомнить, что именно было
                спрятано. В качестве сообщения, например, можно написать о том, какие
                именно изменения выполнены в файлах:
                <Code code={'git stash save "#message"'} />
            </p>
            <h2>!!!</h2>
            <p>
                Git stash не прячет файлы, которые не добавлены в репозиторий. Чтобы их
                спрятать с остальными изменениями используется опция --include-untracked
                (или -u):
                <Code code={'git stash save -u'} />
            </p>
            <h2 id="git-stash-list">Git stash list</h2>
            <p>
                Каждое выполнение git stash или git stash save на самом деле создает
                отдельный коммит и сохраняет его отдельно (в стек). Команда git stash list
                выводит список всех ваших прятаний:
                <Code code={'git stash list'} />
            </p>
            <h2 id="git-stash-apply">Git stash apply</h2>
            <p>
                Команда git stash apply берет самое свежее прятанье и применяет его к
                репозиторию. То есть изменения, которые находятся в этом прятанье,
                применяются к текущему репозиторию. Это похоже на то, как вы применяете
                патч, только в качестве патча выступает ваше прятанье:
                <Code code={'git stash apply'} />
            </p>
            <p>
                Если вы хотите применить какое-нибудь конкретное прятанье, можно указать
                его идентификатор:
                <Code code={'git stash apply stash@{1}'} />
            </p>
            <h2 id="git-stash-pop">Git stash pop</h2>
            <p>
                Команда git stash pop выполняет все тоже самое, что и команда git stash
                apply, но удаляет прятанье, которое она применяет к репозиторию:
                <Code code={'git stash pop'} />
                (<Code code={'git stash pop stash@{1}'} />)
            </p>
            <h2 id="git-stash-show">Git stash show</h2>
            <p>
                Команда git stash show показывает, какие изменения содержатся в прятанье.
                <Code code={'git stash show'} />
            </p>
            <p>
                Чтобы показать полный diff, то есть увидеть сами изменения, используется
                ключ -p:
                <Code code={'git stash show -p'} />
            </p>
            <p>
                Можно указать идентификатор прятанья, чтобы вывести изменения в нем:
                <Code code={'git stash show stash@{1}'} />
            </p>
            <h2 id="git-stash-branch">Git stash branch #name</h2>
            <p>
                Команда git stash branch #new_branch создает новую ветку с последним
                прятаньем, и затем удаляет последнее прятанье (как git stash pop).
                <Code code={'git stash branch #new_branch_name'} />
            </p>
            <p>
                Можно также указать идентификатор прятанья:
                <Code code={'git stash branch new-branch-name stash@{1}'} />
            </p>
            <h2 id="git-stash-drop">Git stash drop</h2>
            <p>
                Команда git stash drop удаляет самое последнее прятанье:
                <Code code={'git stash drop'} />
            </p>
            <p>
                Можно указать идентификатор прятанья, которое нужно удалить:
                <Code code={'git stash drop stash@{1}'} />
            </p>
            <h2 id="git-stash-clear">Git stash clear</h2>
            <p>
                Команда git stash clear удаляет все прятанья. Будьте внимательные перед
                тем, как ее выполнять, чтобы не удалить нужные данные:
                <Code code={'git stash clear'} />
            </p>
        </div>
    )
}
