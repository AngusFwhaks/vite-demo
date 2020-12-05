import {App} from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setAntd(app: App<Element>) {
    app.use(Antd)
}
