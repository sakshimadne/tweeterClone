import express from 'express'
import connect from './config/database.js'
import router from './routes/index.js'
import TweetRepository from './repository/tweet-repository.js'
const app = express()

// app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.listen(3000, async () => {
  console.log('server Started at 3000')
  connect()

  console.log('Mongo DB connected')
})
