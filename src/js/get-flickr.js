const axios = require('axios');

export default class getFlickr {
  constructor() {
    this.API_PATH = 'https://api.flickr.com/services/rest';
    this.necessaryData = [];
  }

  // まずはIDを取得
  request () {
    return axios.get(this.API_PATH, {
      params: {
        'method': 'flickr.people.getPhotos',
        'api_key': 'ca30f5ed9e9016cdd5a47455053319da',
        'user_id': '144899726@N03',
        'format': 'json',
        'nojsoncallback': 1,
      }
    })
      .then( response => {
        let allPromises = [];

        response.data.photos.photo.forEach( item => {
          allPromises.push(this.requestPhotoInfo(item.id));          
        });

        return Promise
          .all(allPromises)
          .then( value => {
            return Array.prototype.concat.apply([], value);
          });
      })
      .catch( error => {
        console.log('error', error);
      });
  }

  // その後、IDに基づいて全情報を取得しに行く
  requestPhotoInfo (photoId) {
    return axios.get(this.API_PATH, {
      params: {
        'method':'flickr.photos.getInfo',
        'api_key': 'ca30f5ed9e9016cdd5a47455053319da',
        'photo_id': photoId,
        'format': 'json',
        'nojsoncallback': 1,
      }
    })
      .then( response => {
        return this.selectNecessaryData(response);
      })
      .catch( error => {
        console.error('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let photo = response.data.photo;
    necessaryData.push({
      type: 'flickr',
      date: Number(photo.dates.lastupdate + '000'), // Flickrは ミリ秒 ではなく 秒 を返す
      title: photo.title._content,
      desc: photo.description._content,
      url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`,
    });
  
    return necessaryData;
  }
}
