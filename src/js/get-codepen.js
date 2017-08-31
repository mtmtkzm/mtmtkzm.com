const parseString = require('xml2js').parseString;
const axios = require('axios');

// export default getCodepen = () => {
//   return axios.get(this.API_PATH)
//     .then(res => selectNecessaryData(res))
// }

// function selectNecessaryData()

export default class getCodepen {
  constructor () {
    this.API_PATH = 'https://codepen.io/mtmtkzm/public/feed';
  }

  request () {
    return axios.get(this.API_PATH)
      .then( response => {
        return this.selectNecessaryData(response);       
      })
      .catch( error => {
        console.log('error', error);
      });
  }

  removeSpaces (str) {
    return str.replace(/\r?\n/g,"").replace(/\s/g, "");
  }

  selectNecessaryData (response) {
    let xmlString = response.request.responseText;
    let necessaryData = [];
    parseString(xmlString, (err, result) => {
      
      result.rss.channel[0].item.forEach( i => {
        necessaryData.push({
          type: 'codepen',
          date: Date.parse(this.removeSpaces(i['dc:date'][0])),
          title: i.title[0],
          desc: this.removeSpaces(i.description[0]),
          url: i.link[0]
        })
      });
    });
    return necessaryData;
  }
}