import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../../StoreProvider'
import { PEN_COLOR } from '../../../helpers/enums'
import { ZoomInAnimationContainer } from '../../../assets/animation/ZoomIn.animation'

const penColors: PEN_COLOR[] = Object.values(PEN_COLOR)

export const PenColorMenu = observer(() => {
    const { onChangePenColor, pen_color, onChangeField, pen_color_menu } = useRootStore()

    useEffect(() => {
        const penColorListener = (event: MouseEvent) => {
            if (!(event.target as Element)?.closest('.color-pen')) {
                onChangeField('pen_color_menu', false)
            }
        }

        window.addEventListener('click', penColorListener)

        return () => window.removeEventListener('click', penColorListener)
    }, [])

    return (
        <ZoomInAnimationContainer
            visibility={pen_color_menu}
            className="absolute -left-2 bottom-14 w-10 flex flex-col gap-4 items-center justify-center">
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
    )
})
