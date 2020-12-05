import { resolve } from 'path'
import type { UserConfig } from 'vite'
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}
const alias: Record<string, string> = {
  '/@/': pathResolve('src'),
};
const viteConfig: UserConfig = {
  alias
}
export default viteConfig