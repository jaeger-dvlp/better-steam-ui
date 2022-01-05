const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3050
require('dotenv').config()

const allowCrossDomain = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
}

app.use(cors())
app.use(allowCrossDomain)

app.get('/api/v1/getUser/', (req, res) => {
  axios
    .get(
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${req.query.userId}`
    )
    .then((axres) => res.json(axres.data.response))
})

app.listen(port, (err) => {
  console.log(`Server is runing at ${port}!`)
})
