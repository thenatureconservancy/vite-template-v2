import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import quasarUserOptions from './quasar-user-options'

// Registers the <arcgis-map> web component
import '@arcgis/map-components/components/arcgis-map'

const app = createApp(App)

app.use(createPinia())
app.use(Quasar, quasarUserOptions)

app.mount('#app')
