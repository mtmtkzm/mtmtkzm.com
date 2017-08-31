const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';
  }

  request () {
    return axios.get(this.API_PATH, {
      params: {
        'author': '396'
      }
    })
      .then(response => {
        return this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
        this.reject();
      });
  }

  selectNecessaryData (response) {
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

}
