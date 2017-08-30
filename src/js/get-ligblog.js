const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';
    this.request();
  }

  request() {
    axios.get(this.API_PATH, {
      params: {
        'author': '396'
      }
    })
      .then(response => {
        this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.forEach( item => {
      necessaryData.push({
        date: Date.parse(item.date),
        title: item.title.rendered,
        desc: item.excerpt.rendered,
        link: item.link,
      });
    });
  
    console.log(necessaryData);
  }

}
