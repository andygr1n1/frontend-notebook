import { observer } from 'mobx-react-lite'
import { Snackbar, Alert } from '@mui/material'
import { useRootStore } from '../StoreProvider'
import { v4 as uuid } from 'uuid'

export const MessageModal = observer(() => {
    const { success_message_modal_is_open, onChangeField } = useRootStore()

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={success_message_modal_is_open}
            onClose={() => onChangeField('success_message_modal_is_open', false)}
            autoHideDuration={1500}
            key={uuid()}>
            <Alert className="!font-sans" severity="success" sx={{ width: '100%' }}>
                Code Copied
            </Alert>
        </Snackbar>
    )
})
