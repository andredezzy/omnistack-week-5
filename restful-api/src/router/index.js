const express = require('express');

const routes = express.Router();

const TweetRoutes = require('./routes/TweetRoutes');
const LikeRoutes = require('./routes/LikeRoutes');

routes.use(TweetRoutes);
routes.use(LikeRoutes);

module.exports = routes;