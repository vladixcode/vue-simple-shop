import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import BaseBadge from './components/ui/BaseBadge.vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('BaseBadge', BaseBadge)

app.mount('#app')
