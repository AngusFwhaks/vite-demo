import { resolve } from 'path'
import type { UserConfig } from 'vite'
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '/@/': pathResolve('src'),
};
const viteConfig: UserConfig = {
  alias,
  proxy:{
    '/api': {
      target: 'http://www.tp6.com/api/', // target host
      ws: true, // proxy websockets
      changeOrigin: true, // needed for virtual hosted sites
      rewrite:(path:string)=>path.replace(/^\/api/, '')
    }
  }
}
export default viteConfig