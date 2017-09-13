var express = require('express');
var bodyParser = require('body-parser');
var messagesController = require('./controllers/messages_controller');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messagesController.create)
app.get('/api/messages', messagesController.read)
app.put('/api/messages/:id', messagesController.update)
app.delete('/api/messages/:id', messagesController.delete)




app.listen(3000, function() {
    console.log('We have ears, say cheers!')
})