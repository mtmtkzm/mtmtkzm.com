const parseString = require('xml2js').parseString;
const axios = require('axios');

export default class getCodepen {
  constructor () {
    this.API_PATH = 'https://codepen.io/mtmtkzm/public/feed';
    this.necessaryData = [];
    this.resolve;
    this.reject;
  }

  request (resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
    axios.get(this.API_PATH)
      .then( response => {
        this.selectNecessaryData(response);
      })
      .catch( error => {
        console.log('error', error);
        this.reject;
      });
  }

  removeSpaces (str) {
    return str.replace(/\r?\n/g,"").replace(/\s/g, "");
  }

  selectNecessaryData (response) {
    let xmlString = response.request.responseText;
    parseString(xmlString, (err, result) => {
      let necessaryData = [];
      result.rss.channel[0].item.forEach( i => {
        necessaryData.push({
          title: i.title[0],
          date: Date.parse(this.removeSpaces(i['dc:date'][0])),
          desc: this.removeSpaces(i.description[0]),
          link: i.link[0]
        })
      });

      this.necessaryData = necessaryData;
      this.resolve();
    });
  }

  returnData () {
    console.log(this.necessaryData);
    return this.necessaryData;
  }

}