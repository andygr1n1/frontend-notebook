import { observer } from 'mobx-react-lite'
import { SettingsIcon } from '../../../../assets/icons/Settings.icon'
import { useRootStore } from '../../../../StoreProvider'

export const CatalogMenuSettingsButton = observer(() => {
    const {
        catalogs$: { onChangeField, in_edit_mode },
    } = useRootStore()

    return (
        <button
            className=" w-16 flex items-end justify-center"
            onClick={() => onChangeField('in_edit_mode', !in_edit_mode)}>
            <SettingsIcon
                className={`
    w-10 h-10 cursor-pointer rounded-full text-primary-color opacity-70 transition-all hover:-translate-y-1 hover:shadow-2xl hover:opacity-100
    ${in_edit_mode && '!opacity-100'}
`}
            />
        </button>
    )
})
