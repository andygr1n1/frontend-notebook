import { IRoute } from '../helpers/types'
import { v4 as uuid } from 'uuid'
import { JsSkillUp } from '../modules/js/pages/JsSkillUp'

export const JsRoutes: IRoute[] = [
    {
        id: uuid(),
        route: 'skill-up',
        title: 'Skill UP',
        component: <JsSkillUp />,
    },
]
