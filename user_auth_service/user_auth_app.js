// const { connectToDB, closeDB } = require('./routes/user_auth_back');

// const express = require('express');
// const app = express();
// const port = 3000;

// connectToDB();




const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const { connectToDB, closeDB} = require('./routes/user_auth_back');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'your_secret_key_here',
  resave: true,
  saveUninitialized: true
}));

const multer = require('multer');
const upload = multer();


app.set('view engine', 'ejs');

connectToDB()
  .then(() => {

  app.get('/login', (req, res) => {
    res.render('login', { error: null });
    });  
    
 app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGINT', async () => {
  console.log('Stopping the server...');
  await closeDB();
  process.exit();
});

})
.catch((err) => {
console.error('Error initializing database connection:', err);
process.exit(1);
});