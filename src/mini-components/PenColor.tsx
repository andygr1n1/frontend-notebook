import { observer } from 'mobx-react-lite'
import { PEN_COLOR } from '../helpers/enums'
import { useRootStore } from '../StoreProvider'

export const PenColor = observer(() => {
    const { onChangeField, pen_color_menu } = useRootStore()
    return (
        <>
            <span
                className="h-7 w-7 rounded-full bg-primary-color shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangeField('pen_color_menu', !pen_color_menu)}
            />

            <PenColorModal />
        </>
    )
})

const PenColorModal = observer(() => {
    const { pen_color_menu, onChangePenColor } = useRootStore()

    if (!pen_color_menu) return null

    return (
        <div className="absolute -left-2 bottom-14 w-10 flex flex-col gap-4 items-center justify-center">
            <span
                className="h-7 w-7 rounded-full bg-red-600 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor(PEN_COLOR.RED)}
            />
            <span
                className="h-7 w-7 rounded-full bg-purple-600 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor(PEN_COLOR.MAGIC)}
            />
            <span
                className="h-7 w-7 rounded-full bg-emerald-500 shadow-2xl cursor-pointer hover:animate-pulse"
                onClick={() => onChangePenColor(PEN_COLOR.EMERALD)}
            />
        </div>
    )
})
