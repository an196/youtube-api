const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    _idVideo: {
        type: String,
        require: true,
    },
    infoOwner:{
        channelName: String,
        imgProfile: String,
        channelLink: String,
    },
    infoVideo:{
        title: String,
        thumbnail: String,
        embedlink: String,
        briefDes: String,
        timePost: String,
        viewCount: String,
        time: String,
        gif: String,
    }
})

module.exports = mongoose.model('Video', videoSchema);