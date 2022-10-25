import { Playlist } from "../models/playlist.js";

export async function get(req, res) {
  try {
    const playlist = req.query.playlist;
    let playlists;

    if (playlist) {
      playlists = await Playlist.find({ title: new RegExp(playlist, "i") });
    } else {
      playlists = await Playlist.find();
    }
    res.status(200).json(playlists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getByPlaylistId(req, res) {
  try {
    const { playlistId } = req.params;
    const playlist = await Playlist.findOne({ playlistId });

    if (!playlist) {
      return res.status(404).json({ message: "No Playlist with that playlistId" });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { playlistId } = req.params;
    const playlist = await Playlist.findOneAndUpdate({ playlistId }, req.body, { new: true });

    if (!playlist) {
      return res.status(404).json({ message: "No Playlist with that playlistId" });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export async function remove(req, res) {
  try {
    const { playlistId } = req.params;
    const playlist = await Playlist.findOneAndRemove({ playlistId });

    if (!playlist) {
      return res.status(404).json({ message: "No Playlist with that playlistId" });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}