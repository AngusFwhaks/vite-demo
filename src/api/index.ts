import request from '/@/utils/request'
export function fetchList() {
  return request({
    url: 'api/index',
    method: 'GET'
  })
}
