const express = require('express');
const path = require('path');
const app = express();
const DataStore = require('nedb');
const {createServer} = require('http');
const compression = require('compression');
const morgan = require('morgan');
const sendMail = require('./mail')

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

// Deploy

const dev = app.get('env') !== 'production'
if(!dev) {
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'build')))
}

const server = createServer(app)

// Cabin Post, Recieve and Store
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.urlencoded({ 
    extended: false
 }))
app.use(express.json())

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

// Mail

app.post('/mail', (request, response) => {
    console.log(request.body);
    const {name, email, subject, text} = request.body
    sendMail(name, email, subject, text, function(err, data){
        if(err) {
            response.json({status: 'error', err})
        } else {
            response.json({status: 'message sent: ', data})
        }
    })
})

server.listen(PORT, err => {
    if (err) throw err

    console.log('App is listening on port ' + PORT);
})
