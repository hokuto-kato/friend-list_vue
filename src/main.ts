import { createApp } from 'vue'
import App from './App.vue'
import './css/main.css'
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

library.add(faAddressCard)

const app = createApp(App)
app.component('active-user', ActiveUser)
app.component('user-data', UserData)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
