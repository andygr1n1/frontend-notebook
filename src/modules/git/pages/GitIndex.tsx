import { EMPTY_PAGE_LOGO_ENUM } from '../../../helpers/enums'
import { Code } from '../../../mini-components/Code'
import { EmptyPageLogo } from '../../../mini-components/EmptyPageLogo'

export const GitIndex = () => {
    // return <EmptyPageLogo icon={EMPTY_PAGE_LOGO_ENUM.GIT} />
    return (
        <>
            <h1>
                Git&nbsp;
                <a href="https://git-scm.com/book/en/v2" target="_blank">
                    📚
                </a>
            </h1>
            <p>
                Git — система контроля версий (файлов). Что-то вроде возможности
                сохраняться в компьютерных играх (в Git эквивалент игрового сохранения —
                коммит).
            </p>
            <h2>Настройки</h2>
            <p>
                <Code code='git config --global user.name "Your Name"' /> # указать имя,
                которым будут подписаны коммиты
            </p>
            <p>
                <Code code='git config --global user.email "e@w.com"' /> # указать
                электропочту, которая будет в описании коммитера
            </p>
            <p>
                Если Windows: <Code code="git config --global core.autocrlf true" /> #
                включить преобразование окончаний строк из CRLF в LF
            </p>
            <p>
                <button>
                    <a
                        href="https://github.com/nicothin/web-development/tree/master/git#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8"
                        target="_blank">
                        Git Шпаргалка
                    </a>
                </button>
            </p>
        </>
    )
}
