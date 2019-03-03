import * as u from '../utils'
import axios from 'axios';
const API_PATH = 'http://qiita.com/api/v2/users/mtmtkzm/items';

export default function () {
  return axios.get(API_PATH, {
    params: {
      'page': 1,
      'per_page': 10
    }
  })
    .then(response => {
      return selectNecessaryData(response);
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}

function selectNecessaryData (response) {
  return response.data.map(item => ({
    type: 'qiita',
    date: Date.parse(item.updated_at),
    title: item.title,
    desc: u.extractDescription(item.rendered_body),
    url: item.url,
  }));
}
