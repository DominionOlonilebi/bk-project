const express = require('express');
const cors = require('cors');
const sharedRoutes = require('../routes/v1/sharedRoutes');
const userRoutes = require('../routes/v1/userRoutes');


const app = express();

//setting up cors origin using devirtuos.com company only request from them wil be accepted by the backend
//middleware
const corsOptions = {
    origin: 'http://127.0.0.1:5501',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}

app.use(cors(corsOptions));
app.use(express.json());

//routes
app.use('/v1/shared', sharedRoutes);
app.use('/v1/users', userRoutes);

module.exports = app;