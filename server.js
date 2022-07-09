const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 9000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()

let db = 'illyaContact'
let dbName = 'illyaContact'

    
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('js'))
app.use(express.static('css'))
app.use(express.static('public'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/',(request, response)=>{
    response.render('home.ejs')
})

app.get('/gameplay',(request, response)=>{
    response.render('gameplay.ejs')
})

app.get('/about',(request, response)=>{
    response.render('about.ejs')
})

app.get('/photos',(request, response)=>{
response.render('photos.ejs')
})

app.get('/contact',(request, response)=>{
response.render('contact.ejs')
})

app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
