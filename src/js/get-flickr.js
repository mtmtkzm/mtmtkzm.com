const axios = require('axios');

export default class getFlickr {
  constructor() {
    this.API_PATH = 'https://api.flickr.com/services/rest';
    this.currentPhotoLength = 0;
    this.wholePhotoLength = 0;
    this.responses = [];
    this.necessaryData = [];
    this.resolve;
    this.reject;
  }

  // まずはIDを取得
  request (resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;

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
        this.wholePhotoLength = response.data.photos.photo.length;
        response.data.photos.photo.forEach( item => {
          this.requestPostedDate(item.id);
        });        
      })
      .catch(error => {
        console.log('error', error);
        this.reject();
      });
  }

  // その後、IDに基づいて全情報を取得しに行く
  requestPostedDate (photoId) {
    axios.get(this.API_PATH, {
      params: {
        'method':'flickr.photos.getInfo',
        'api_key': 'ca30f5ed9e9016cdd5a47455053319da',
        'photo_id': photoId,
        'format': 'json',
        'nojsoncallback': 1,
      }
    })
      .then(response => {
        this.responses.push(response);
        this.currentPhotoLength++;
        if (this.currentPhotoLength >= this.wholePhotoLength) {
          this.selectNecessaryData(this.responses);
        };
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  selectNecessaryData (response) {
    let necessaryData = [];
    let pushEventArray = response.forEach( item => {
      let photo = item.data.photo;
      necessaryData.push({
        type: 'flickr',
        date: Number(photo.dates.lastupdate + '000'), // Flickrは ミリ秒 ではなく 秒 を返す
        title: photo.title._content,
        desc: photo.description._content,
        url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`,
      });
    });
  
    this.necessaryData = necessaryData;
    this.resolve();
  }

  returnData () {
    return this.necessaryData;
  }
}
