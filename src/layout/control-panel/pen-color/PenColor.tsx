import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../StoreProvider'

import { PenColorMenu } from './PenColorMenu'

const PenColor = observer(() => {
    const { onChangeField, pen_color_menu } = useRootStore()
    console.log('pen color in navmenu')
    return (
        <>
            <span
                className="color-pen bg-primary-color"
                onClick={() => onChangeField('pen_color_menu', !pen_color_menu)}
            />
            {pen_color_menu && <PenColorMenu />}
        </>
    )
})

export default PenColor
