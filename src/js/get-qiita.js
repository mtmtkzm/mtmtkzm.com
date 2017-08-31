const axios = require('axios');

export default class getQiita {
  constructor() {
    this.API_PATH = 'http://qiita.com/api/v2/users/mtmtkzm/items';
  }

  request () {
    return axios.get(this.API_PATH, {
      params: {
        'page': 1,
        'per_page': 10
      }
    })
      .then(response => {
        return this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.forEach( item => {
      necessaryData.push({
        type: 'qiita',
        date: Date.parse(item.updated_at),
        title: item.title,
        desc: item.rendered_body,
        url: item.url,
      });
    });
  
    return necessaryData;
  }
}
