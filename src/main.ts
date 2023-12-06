import { createApp } from 'vue'

import App from '@/App.vue'
import '@/style/reset.scss'
import HospitalTop from '@/components/hospital_top/index.vue'
import Hospitabottom from '@/components/hospital_bottom/index.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('Hospitabottom', Hospitabottom)
app.use(ElementPlus)
app.use(router)







app.mount('#app')




