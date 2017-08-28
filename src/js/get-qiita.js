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
        console.log(response);
      })
      .catch(error => {
        console.log('error', error)
      });
  }

}
