const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./server/routes/api/users');
const employee = require('./server/routes/api/employee');

const app = express();

// Body parser middleware for retriving the email address
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());


// DB configuration
const bd = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(bd)
    .then(() => { console.log('Yes... MongoDB is connected');})
    .catch(err => { console.log(err);})

// For test
//app.get('/', (req, res) => {res.send('hello Asit')});

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);


// User Routes
app.use('/api/users', users);
app.use('/api/employee', employee);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));