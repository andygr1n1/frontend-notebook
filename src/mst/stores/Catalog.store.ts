import { types } from 'mobx-state-tree'

export const Catalog$ = types
    .model('Catalog$', {
        id: types.identifier,
        route: '',
        title: '',
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
    .actions(() => ({}))
