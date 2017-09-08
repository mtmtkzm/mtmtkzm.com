const axios = require('axios');
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
      desc: parseDescription(item.excerpt.rendered),
      url: item.link,
    });
  });

  return necessaryData;
}

function parseDescription (str) {
  let temp = document.createElement('div');
  temp.innerHTML = str;
  // 3番目の <p> に格納されていた
  return temp.innerText;
}
