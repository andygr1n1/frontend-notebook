import type { Instance, SnapshotIn } from 'mobx-state-tree'
import type { Catalog } from './models/Catalog.model'
import type { Catalogs$ } from './stores/Catalogs.store'
import type { Root$ } from './stores/Root.store'

export interface IRoot$ extends Instance<typeof Root$> {}
export interface ICatalogs$ extends Instance<typeof Catalogs$> {}
export interface ICatalog extends Instance<typeof Catalog> {}
export interface ICatalogSnapshotIn extends SnapshotIn<typeof Catalog> {}
