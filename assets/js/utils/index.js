// 指定セレクタか、先頭からの文字数をディスクリプションとして返却
export function extractDescription (str, type = 100) {
  let temp = document.createElement('div');
  temp.innerHTML = str;

  if (typeof type === 'string') {
    return temp.querySelector(type).innerText;
  }
  else if (typeof type === 'number') {
    return temp.innerText.substr(0, type);
  }
}

// 改行を削除
export function removeParagraphs (str) {
  return str.replace(/\r?\n/g,"");
}

// スペースを削除
export function removeSpaces (str) {
  return str.replace(/\s/g, "");
}

// ms形式を y,m,d 指定で返却する
export function toDate(num, date) {
  let newDate = new Date(num);
  if (date === 'year') { return newDate.getFullYear() }
  else if (date === 'month') { return newDate.getMonth() + 1 }
  else if (date === 'date') { return newDate.getDate() }
  else { return newDate }
}

// 2桁に変換して返す
export function doublenDigit(target) {
  return ('00'+String(target)).slice(-2);
}
