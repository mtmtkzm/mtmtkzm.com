import * as u from '../utils'
import http from '../utils/http'
const API_PATH = 'https://qiita.com/api/v2/users/mtmtkzm/items'

export default function() {
  return http
    .get(API_PATH, {
      params: {
        page: 1,
        per_page: 10
      }
    })
    .then(response => {
      return formatData(response)
    })
    .catch(error => {
      console.error(error)
      return []
    })
}

function formatData(response) {
  return response.data.map(item => ({
    type: 'qiita',
    date: Date.parse(item.updated_at),
    title: item.title,
    desc: u.extractDescription(item.rendered_body),
    url: item.url
  }))
}
