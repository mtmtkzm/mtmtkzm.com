const parseString = require('xml2js').parseString;
const axios = require('axios');

export default class getCodepen {
  constructor () {
    this.API_PATH = 'https://codepen.io/mtmtkzm/public/feed';
    this.request();
  }

  request () {
    axios.get(this.API_PATH)
      .then( response => {
        this.parseData(response);
      })
      .catch( error => { console.log('error', error) });
  }

  parseData (response) {
    let xmlString = response.request.responseText;
    parseString(xmlString, (err, result) => {
      let data = [];
      result.rss.channel[0].item.forEach( i => {
        data.push({
          title: i.title[0],
          date: new Date(this.removeSpaces(i['dc:date'][0])),
          desc: this.removeSpaces(i.description[0]),
          link: i.link[0]
        })
      });
      return data;
    });
  }

  removeSpaces (str) {
    return str.replace(/\r?\n/g,"").replace(/\s/g, "");
  }

}