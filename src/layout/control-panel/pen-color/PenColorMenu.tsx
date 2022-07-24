import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../StoreProvider'
import { PEN_COLOR } from '../../../helpers/enums'
import { ZoomInAnimationContainer } from '../../../assets/animation/ZoomIn.animation'

const penColors: PEN_COLOR[] = Object.values(PEN_COLOR)

export const PenColorMenu = observer(() => {
    const { onChangePenColor, pen_color, onChangeField, pen_color_menu } = useRootStore()

    return pen_color_menu ? (
        <ZoomInAnimationContainer
            visibility={pen_color_menu}
            className="absolute top-14 flex flex-col items-center justify-center gap-4"
            onClose={() => onChangeField('pen_color_menu', false)}>
            {penColors
                .filter((color) => color !== pen_color)
                .map((color) => (
                    <span
                        key={color}
                        className="color-pen"
                        style={{ background: color }}
                        onClick={() => onChangePenColor(color)}
                    />
                ))}
        </ZoomInAnimationContainer>
    ) : null
})
