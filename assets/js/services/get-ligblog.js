import * as u from '../utils'
import axios from 'axios'
const API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';

export default function () {
  return axios.get(API_PATH, {
    params: {
      'author': '396',
      'per_page': '5'
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
  let necessaryData = [];
  response.data.forEach( item => {
    necessaryData.push({
      type: 'ligblog',
      date: Date.parse(item.date),
      title: item.title.rendered,
      desc: u.extractDescription(item.excerpt.rendered, 60),
      url: item.link,
    });

  });
  return necessaryData;
}
