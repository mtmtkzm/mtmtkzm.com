const axios = require('axios');
const API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';

export default function getLigblog () {
  return axios.get(API_PATH, {
    params: {
      'author': '396'
    }
  })
    .then(response => {
      return selectNecessaryData(response);
    })
    .catch(error => {
      console.log('error', error);
    });
}

function selectNecessaryData (response) {
  let necessaryData = [];
  let pushEventArray = response.data.forEach( item => {
    necessaryData.push({
      type: 'ligblog',
      date: Date.parse(item.date),
      title: item.title.rendered,
      desc: item.excerpt.rendered,
      url: item.link,
    });
  });

  return necessaryData;
}
