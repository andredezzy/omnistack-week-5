const express = require('express');

const routes = express.Router();

const LikeController = require('../../controllers/LikeController');

routes.put('/like/:id', LikeController.addLikeById);

module.exports = routes;