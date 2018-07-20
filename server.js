const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./server/controller')
const massive = require('massive');
require('dotenv').config();

const app = express()
app.use(bodyParser.json())
massive(process.env.DB_CONNECTION_STRING)
.then(db=>{
    app.set("db", db)
    console.log("db Connected")
})
.catch(err => console.log(err))

const port = 3005

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});