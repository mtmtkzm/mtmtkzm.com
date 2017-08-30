const axios = require('axios');

export default class getQiita {
  constructor() {
    this.API_PATH = 'http://qiita.com/api/v2/users/mtmtkzm/items';
    this.request();
  }

  request() {
    axios.get(this.API_PATH, {
      params: {
        'page': 1,
        'per_page': 10
      }
    })
      .then(response => {
        this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.forEach( item => {
      necessaryData.push({
        date: new Date(item.updated_at),
        title: item.title,
        desc: item.rendered_body,
        link: item.url,
      });
    });
  
    console.log(necessaryData);
  }

}
