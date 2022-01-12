import { observer } from 'mobx-react-lite'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { PEN_COLOR } from '../../helpers/enums'
import { useRootStore } from '../../StoreProvider'
import { useEffect } from 'react'
const fadeInAnimation = keyframes`${fadeIn}`

const StyledMenu = styled.div`
    animation: ${fadeInAnimation} 1s;
`

const penColors: PEN_COLOR[] = Object.values(PEN_COLOR)

export const PenColorMenu = observer(() => {
    const { onChangePenColor, pen_color, onChangeField } = useRootStore()

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
        <StyledMenu className="absolute -left-2 bottom-14 w-10 flex flex-col gap-4 items-center justify-center">
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
        </StyledMenu>
    )
})
