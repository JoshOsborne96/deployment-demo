const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// Middleware
app.use(express.static(path.join(__dirname, '../public')))
// app.use(express.static(path.join(__dirname, '../public/index.css')))


// Endpoints
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public'))
// })

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

// app.get("/styles", function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.css'))
// })

const port = process.env.PORT || 4004

app.listen(port, () => {
    console.log(`Up on port ${port}`)
})