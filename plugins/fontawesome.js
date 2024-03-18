import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckSquare, faPlus);

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})