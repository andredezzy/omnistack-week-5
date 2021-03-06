const Tweet = require('../models/Tweet');

module.exports = {
    async addLikeById(req, res, next) {
        try {
            const tweet = await Tweet.findById(req.params.id);

            tweet.set({ likes: tweet.likes + 1 });

            await tweet.save();

            req.io.emit('like', tweet);

            return res.status(200).json(tweet);
        } catch {
            const error = {
                status: 404,
                message: 'Unable to like tweet.'
            };

            return next(error);
        }
    }
};