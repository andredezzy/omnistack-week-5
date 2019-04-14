const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const server = http.Server(app);
const io = require('socket.io')(server);

const router = require('./router');

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    return next();
});

app.use(router);

app.use((error, res) => {
    console.log(error);

    const status = error.status || 500;
    const message = error.message;

    return res.status(status).json({ message: message, status: status });
});


mongoose
    .connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds123635.mlab.com:23635/${process.env.DB_NAME}`,
        {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    )
    .then(result => {
        server.listen(process.env.PORT || 3000, () => {
            console.log(`Server started at: http://localhost:${process.env.PORT || 3000}`);
        });
    })
    .catch(error => {
        console.log(error);
    });