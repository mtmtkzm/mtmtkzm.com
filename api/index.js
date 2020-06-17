const app = require('express')()
const router = require('express').Router()

router.get('/', (req, res) => {
  const { url } = req

  return res.send(url + 'hello world?!')
})

app.use('/posts', router)

module.exports = app
