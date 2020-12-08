import { App } from 'vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setAntd(app: App<Element>) {
  app.use(Button)
}
