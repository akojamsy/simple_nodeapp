const express = require('express')
const mongoose = require('mongoose')

const usersRouter = require('./routes/users')
const url = 'mongodb://localhost/profile'

const app = express()


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const conn = mongoose.connection

app.use(express.json())
app.use('/users', usersRouter)


app.listen(3000, () => {
    console.log("Database is connected successfully. Please smile ):!.." )
})

