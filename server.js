const express  = require('express');
const mongoose = require('mongoose');

const users = require('./server/routes/api/users');
const profiles = require('./server/routes/api/profiles');
const posts = require('./server/routes/api/posts');

const app = express();

// DB configuration
const bd = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(bd)
    .then(() => { console.log('Yes... MongoDB is connected');})
    .catch(err => { console.log(err);})

app.get('/', (req, res) => {
    res.send('hello Asit')}
);

// User Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));