import type { Instance, SnapshotIn } from 'mobx-state-tree'
import type { Catalog$ } from './stores/Catalog.store'
import type { Catalogs$ } from './stores/Catalogs.store'
import type { Root$ } from './stores/Root.store'

export interface IRoot$ extends Instance<typeof Root$> {}
export interface ICatalogs$ extends Instance<typeof Catalogs$> {}
export interface ICatalog$ extends Instance<typeof Catalog$> {}
export interface ICatalog$SnapshotIn extends SnapshotIn<typeof Catalog$> {}
