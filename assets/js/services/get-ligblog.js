import * as u from '../utils'
import http from '../utils/http'
const API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts'

export default function() {
  return http
    .get(API_PATH, {
      params: {
        author: '396',
        per_page: '10'
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
    type: 'ligblog',
    date: Date.parse(item.date),
    title: item.title.rendered,
    desc: u.extractDescription(item.excerpt.rendered, 60),
    url: item.link
  }))
}
