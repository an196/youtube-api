const express = require('express');
const router = express.Router();
const videoController = require('../../controllers/videoController');

router.route('/')
    .get(videoController.getVideos)
    .post(videoController.addVideo)
    .delete(videoController.deleteVideo);

module.exports = router;