require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
// const bcrypt = require('bcryptjs')
const ctrl = require('./controller')

// initialize express app
const app = express();

// destructure from .env
const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

// connect to DB
massive(CONNECTION_STRING)
.then(db => {app.set('db', db) 
console.log('Connected to the db')})

// // middleware
app.use(express.json())         //bodyparser
app.use(session({
    secret: SECRET,
    resave: false,
    saveUnitialized: false
}))
app.use( express.static( __dirname + '../../public' ) );

// endpoints
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts/:userid', ctrl.getAllPosts)

// listen on port
app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))