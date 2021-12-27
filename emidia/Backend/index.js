let express = require('express')
const data = require('./db')
let app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (request, response) => {
  response.send(data)
})
app.get('/home', (request, response) => {
  response.render('index.ejs',{infos : data})
})
app.post('/', (request, response) => {
    // Traitement des données
})

app.listen(8080);