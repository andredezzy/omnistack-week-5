const express = require('express');

const routes = express.Router();

const TweetController = require('../../controllers/TweetController');

routes.get('/tweets', TweetController.getAll);
routes.post('/tweets', TweetController.postCreateTweet);

module.exports = routes;