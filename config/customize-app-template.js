const fs = require('fs')

export default function customizeAppTemplate() {
  fs.readFile('./assets/svg/icons.svg', 'utf8', function(err, data) {
    if (err) throw err

    fs.open('./.nuxt/views/app.template.html', 'w', function(err, fd) {
      if (err) throw err

      const resultStr =
        '<!--' +
        '\n __    __ _______ __    __ _______ _   ________ __    __' +
        '\n|  \\  /  |__   __|  \\  /  |__   __| | / /___  /|  \\  /  |' +
        '\n| \\ \\/ / |  | |  | \\ \\/ / |  | |  | |/ /   / / | \\ \\/ / |' +
        '\n| |\\  /| |  | |  | |\\  /| |  | |  |  _ \\  / /__| |\\  /| |' +
        '\n|_| \\/ |_|  |_|  |_| \\/ |_|  |_|  |_| \\_\\/_____|_| \\/ |_|' +
        '\n-->' +
        '<!DOCTYPE html>\n' +
        '<html {{ HTML_ATTRS }}>\n' +
        '  <head>\n' +
        '    {{ HEAD }}\n' +
        '  </head>\n' +
        '  <body {{ BODY_ATTRS }}>\n' +
        data +
        '    {{ APP }}\n' +
        '  </body>\n' +
        '</html>'
      const buffer = new Buffer(resultStr)

      fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw err
        fs.close(fd, function() {
          // done!
        })
      })
    })
  })
}
