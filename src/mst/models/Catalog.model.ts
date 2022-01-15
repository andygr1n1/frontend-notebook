import { getParentOfType, types } from 'mobx-state-tree'
import { Catalogs$ } from '../stores/Catalogs.store'

export const Catalog = types
    .model('Catalog', {
        id: types.identifier,
        route: '',
        title: '',
        checked: false,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .actions((self) => ({
        toggleCheckCatalog() {
            const { selectedCatalogs } = getParentOfType(self, Catalogs$)

            if (selectedCatalogs.length > 5 && !self.checked) {
                alert('You can select maximum 5 catalogs!')
                return
            }

            self.checked = !self.checked
        },
    }))
