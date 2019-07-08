const axios = require('axios')
const API_PATH = 'https://api.flickr.com/services/rest'
const USER_ID = '144899726@N03'

export default function() {
  // まずはIDを取得
  return axios
    .get(API_PATH, {
      params: {
        method: 'flickr.people.getPhotos',
        api_key: 'ca30f5ed9e9016cdd5a47455053319da',
        user_id: USER_ID,
        min_upload_date: '',
        extras: 'last_update,description',
        per_page: 20,
        format: 'json',
        nojsoncallback: 1
      }
    })
    .then(response => {
      return selectNecessaryData(response)
    })
    .catch(error => {
      console.error(error)
      return []
    })
}

function selectNecessaryData(response) {
  const necessaryData = []
  response.data.photos.photo.forEach(item => {
    necessaryData.push({
      type: 'flickr',
      date: Number(item.lastupdate + '000'), // Flickrは ミリ秒 ではなく 秒 を返すので
      title: item.title,
      desc: item.description._content,
      photo: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`,
      url: `https://www.flickr.com/photos/${USER_ID}/${item.id}/in/dateposted-public/`
    })
  })

  return necessaryData
}
