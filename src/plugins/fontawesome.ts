import { defineNuxtPlugin, NuxtApp } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faPlus, faEllipsisV, faPenNib, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckSquare, faPlus, faEllipsisV, faPenNib, faTrashAlt);

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})