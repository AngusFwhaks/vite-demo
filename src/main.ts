import {createApp} from 'vue'
import App from './App.vue'
import router from '/@/router'
import store from '/@/store'
import {setAntd} from '/@/plugins/ant-design-vue'

const app = createApp(App)
setAntd(app)
app.use(router).use(store).mount('#app')
