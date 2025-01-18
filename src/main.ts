import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './plugins/firebase'
import { i18n } from './i18n';
import { useErrorStore } from './stores/errorStore'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ],
})
app.use(i18n)

const errorStore = useErrorStore();
const { addToErrorList } = errorStore;

app.config.errorHandler = (err, vm, info) => {
    console.error('Error occurred:', err);
    console.error('Component info:', vm);
    console.error('Additional info:', info);
    addToErrorList(`Error occurred: ${err}`, `system error`)
}

app.mount('#app')
