import { JsSkillUp } from '../modules/js/pages/JsSkillUp'

export const JsRoutesComponents: React.FC<{ route: string }> = ({ route }) => {
    if (route === 'skill_up') return <JsSkillUp />
    return null
}
