const axios = require('axios');

export default class getLigblog {
  constructor() {
    this.API_PATH = 'https://api.flickr.com/services/rest';
    this.request();
  }

  request() {
    axios.get(this.API_PATH, {
      params: {
        'method':'flickr.people.getPhotos',
        'api_key': 'ca30f5ed9e9016cdd5a47455053319da',
        'user_id': '144899726@N03',
        'format': 'json',
        'nojsoncallback': 1,
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

}
