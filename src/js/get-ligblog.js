const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://liginc.co.jp/wp-json/wp/v2/posts';
    this.necessaryData = [];
    this.resolve;
    this.reject;
  }

  request (resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;

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
        this.reject();
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
  
    this.necessaryData = necessaryData;
    this.resolve();
  }

  returnData () {
    return this.necessaryData;
  }

}
