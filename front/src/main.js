import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import components from '@/components/ui'
import './style/index.scss'

const app = createApp(App)
components.forEach(component => app.component(component.name,component))
app
    .use(store)
    .use(router)
    .mount('#app')
