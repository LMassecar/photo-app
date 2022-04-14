const express = require('express');
const app=express();

const MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'ejs');

console.log('server.js running')

app.listen(3000,function(){
    console.log('listening on 3000');
})

MongoClient.connect('mongodb+srv://admin:admin@cluster0.y8ttc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
}).then(client => {
    // ...
    const db = client.db('photos')
    const photosCollection = db.collection('photos')
  });
