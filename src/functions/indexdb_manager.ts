import localForage from 'localforage'
import { applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree'
import type { IRoot$, IRoot$SnapshotIn } from '../mst/types'

const localforage_config = () => {
    return localForage.config({
        driver: localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
        name: 'frontEndNotes',
        version: 1.0,
        size: 4980736, // Size of database, in bytes. WebSQL-only for now.
        storeName: 'root_db', // Should be alphanumeric, with underscores.
        description: 'frontendnotes storage',
    })
}

export const initialize_local_forage = async (root_store: IRoot$) => {
    localforage_config()
    return await localForage
        .keys()
        .then((keys) => {
            const rootKeys: string[] = []
            for (const [key, value] of Object.entries(getSnapshot(root_store))) {
                rootKeys.push(key)
                if (!keys.includes(key)) {
                    localForage.setItem(key, value)
                }
            }
            return rootKeys
        })
        .then((keys) => {
            return getItemsFromLocalForage(keys, root_store)
        })
        .catch((e) => console.log('init_local_forage() error:::', e))
}

const getItemsFromLocalForage = (keys: string[], root_store: IRoot$) => {
    const values: any = []
    keys.forEach((key) => {
        const res = localForage.getItem(key)
        values.push(res)
    })

    return Promise.all(values)
        .then((values) => {
            createStoreFromFragments(keys, values, root_store)
            localforage_save_on_snapshot(root_store)
        })
        .then(() => true)
}

const createStoreFromFragments = (keys: string[], values: any[], root_store: IRoot$) => {
    const resurrectedStore = Object.fromEntries(
        keys.map((key, index) => [key, values[index]]),
    ) as IRoot$SnapshotIn
    applySnapshot(root_store, resurrectedStore)
}

export const localforage_save_on_snapshot = (root_snapshot: IRoot$) => {
    onSnapshot(root_snapshot, (snapshot) => {
        for (const [key, value] of Object.entries(snapshot)) {
            localforage_config()
            localForage.getItem(key).then((item) => {
                if (!item) {
                    localForage.setItem(key, value)
                    return
                }

                item = value
                localForage.setItem(key, item)
            })
        }
    })
}
