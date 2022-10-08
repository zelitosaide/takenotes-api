import mongoose from "mongoose";

const videoPlayListSchema = mongoose.Schema({
  title: String,
  playlistId: String,
  userId: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  },
});

const VideoPlayList = mongoose.model('VideoPlayList', videoPlayListSchema);

export default VideoPlayList;