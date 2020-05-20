const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())
console.log('hei fra server.js');

app.post('/cabins', (request, response) => {
    console.log(request.body);
    response.json({
        status: 'success',
        recieved: request.body
    })
})

const port = process.env.PORT || 3000;
app.listen(port);
console.log('App is listening on port ' + port);