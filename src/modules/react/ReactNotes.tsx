import { ReactNotesPageContent } from './ReactNotesPageContent'
import { ReactNotesSideMenu } from './ReactNotesSideMenu'

export const ReactNotes = () => {
    return (
        <div className="module-wrapper">
            <ReactNotesSideMenu />
            <ReactNotesPageContent />
        </div>
    )
}
