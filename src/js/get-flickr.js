const axios = require('axios');
const API_PATH = 'https://api.flickr.com/services/rest';

export default function getFlickr () {
  // まずはIDを取得
  return axios.get(API_PATH, {
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
        allPromises.push(requestPhotoInfo(item.id));          
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

function requestPhotoInfo (photoId) {
  return axios.get(API_PATH, {
    params: {
      'method':'flickr.photos.getInfo',
      'api_key': 'ca30f5ed9e9016cdd5a47455053319da',
      'photo_id': photoId,
      'format': 'json',
      'nojsoncallback': 1,
    }
  })
    .then( response => {
      return selectNecessaryData(response);
    })
    .catch( error => {
      console.error('error', error);
    });
}

function selectNecessaryData (response) {
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