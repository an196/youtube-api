const Video = require('../models/Video');

const getVideos = async (req, res) => {
    const Videos = await Video.find();
    if (!Videos) return res.status(204).json({ message: 'No videos found' });
    res.json(Videos);
};

const addVideo = async (req, res) => {
    const newVideo = new Video({  ...req.body});
   
    try {
        const savedVideo = await newVideo.save();
        
        res.status(200).json(savedVideo);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteVideo = async (req, res) => {
}

const updateVideo = async (req, res) => {
}

module.exports = {
    getVideos,
    addVideo,
    deleteVideo,
    updateVideo
};