import { Instance } from 'mobx-state-tree'
import { Root$ } from './stores/Root.store'

export interface IRoot$ extends Instance<typeof Root$> {}
