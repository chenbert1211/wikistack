let express = require('express');
const { db } = require('./models');
const index = require("./views/index")
const app = express();
app.use(express.static(__dirname + "/views"
));

const PORT = '8080';

console.log(db);
app.get('/', (req, res) =>
{
    res.send(index.main());
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.listen(PORT, (req, res) => {
    console.log('hello world')
})

