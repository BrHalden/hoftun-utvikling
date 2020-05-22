const express = require('express');
const path = require('path');
const app = express();
const DataStore = require('nedb');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())
console.log('hei fra server.js');

const database = new DataStore('cabins.db');
database.loadDatabase();

app.get('/cabins', (request, response) => {
    database.find({}, (error, cabins) => {
        if (error) {
            console.log(err);
            response.end();
            return;
        }
        response.json(cabins);
    })
})

app.post('/cabins', (request, response) => {
    console.log(request.body);
    database.insert(request.body);
    console.log(database);
    response.json({
        status: 'success',
        recieved: request.body
    })
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log('App is listening on port ' + port);