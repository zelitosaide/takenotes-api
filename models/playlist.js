import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
  title: String,
  playlistId: String,
  favorite: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export { Playlist };