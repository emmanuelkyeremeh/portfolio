const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const port = process.env.port || 8080

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://emmanuelkyeremeh:1234567qazplm@portfolio-mail.z1c39.mongodb.net/Portfolio-mail?retryWrites=true&w=majority',{useNewUrlParser: true})

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error: '))
db.once('open',()=>{
    console.log('Connection Successful')
})


const submitRouter = require('./routes/submit')

app.use('/submit',submitRouter)

app.listen(port, () => console.log(`Listening on port ${port}.....`))