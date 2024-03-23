// plugins/pinia-persistedstate.ts
import { getActivePinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Plugin } from '@nuxt/types'

const piniaPersistedState: Plugin = ({ app }) => {
    const pinia = getActivePinia()
    pinia.use(piniaPluginPersistedstate)
}

export default piniaPersistedState