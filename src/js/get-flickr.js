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
        this.selectNecessaryData(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.data.photos.photo.forEach( item => {
      necessaryData.push({
        date: new Date(),
        title: item.title,
        desc: item.title,
        link: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`,
      });
    });
  
    console.log(necessaryData);
  }

}
