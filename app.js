import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('docker node')
})

app.listen(8080, () => {
  console.log('listening on 8080')
})
