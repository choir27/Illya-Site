const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 9000
const cors = require('cors')
const fs = require('fs')
require('dotenv').config()

let db = 'illyaContact'
let dbName = 'illyaContact'

MongoClient.connect(process.env.DATABASE_URL, { useUnifiedTopology: true })
    .then(client => {

        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('js'))
app.use(express.static('css'))
app.use(express.static('assets'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/',(request, response)=>{
    db.collection('illyaContact').find().toArray()
        .then(result => {
            response.render('home.ejs', { info: result })
        })
        .catch(err=>console.error(err))
})

app.get('/gameplay',(request, response)=>{
    db.collection('illyaContact').find().toArray()
        .then(result => {
            response.render('gameplay.ejs', { info: result })
        })
        .catch(err=>console.error(err))
})

app.get('/about',(request, response)=>{
    db.collection('illyaContact').find().toArray()
        .then(result => {
            response.render('about.ejs', { info: result })
        })
        .catch(err=>console.error(err))
})

app.get('/photos',(request, response)=>{
    db.collection('illyaContact').find().toArray()
        .then(result => {
            response.render('photos.ejs', { info: result })
        })
        .catch(err=>console.error(err))
})

app.get('/contact',(request, response)=>{
    db.collection('illyaContact').find().toArray()
        .then(result => {
            response.render('contact.ejs', { info: result })
        })
        .catch(err=>console.error(err))
})

app.listen(process.env.PORT || PORT, ()=>{  
    console.log(`Server running on port ${PORT}`)
})
