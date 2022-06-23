let express = require('express');
const { Page, User, db } = require('./models');
const index = require("./views/index")
const app = express();
app.use(express.static(__dirname + "/views"
));
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter);
app.use('/wiki', wikiRouter);

const PORT = '8080';

app.get('/', (req, res) =>
{
    res.send(index.main());
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async () => {
    
  await Page.sync();
  await User.sync();
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();


