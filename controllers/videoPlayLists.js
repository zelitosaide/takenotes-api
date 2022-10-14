import VideoPlayList from "../models/videoPlayList.js";

export async function get(_, res) {
  try {
    const videoPlayLists = await VideoPlayList.find();
    res.status(200).json(videoPlayLists);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export async function getByPlaylistId(req, res) {
  try {
    const { playlistId } = req.params;
    const videoPlayList = await VideoPlayList.findOne({ playlistId });

    if (!videoPlayList) {
      return res.status(404).json({ message: "No Video Playlist with that playlistId" });
    }
    res.status(200).json(videoPlayList);
  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export async function create(req, res) {
  try {
    const videoPlayList = new VideoPlayList(req.body);
    await videoPlayList.save();
    res.status(201).json(videoPlayList);
  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export async function update(req, res) {
  try {
    const { playlistId } = req.params;
    const videoPlayList = await VideoPlayList.findOneAndUpdate({ playlistId }, req.body, { new: true });

    if (!videoPlayList) {
      return res.status(404).json({ message: "No Video Playlist with that playlistId" });
    }
    res.status(200).json(videoPlayList);
  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export async function remove(req, res) {
  try {
    const { playlistId } = req.params;
    const videoPlayList = await VideoPlayList.findOneAndRemove({ playlistId });

    if (!videoPlayList) {
      return res.status(404).json({ message: "No Video Playlist with that playlistId" });
    }
    res.status(200).json(videoPlayList);
  } catch (error) {
    res.status(409).json({ message: error });
  }
}