import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../StoreProvider'

import { PenColorMenu } from './PenColorMenu'

export const PenColor = observer(() => {
    const { onChangeField, pen_color_menu } = useRootStore()
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
