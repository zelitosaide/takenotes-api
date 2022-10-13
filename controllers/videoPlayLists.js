import mongoose from "mongoose";

import VideoPlayList from "../models/videoPlayList.js";

export async function get(_, res) {
  try {
    const videoPlayLists = await VideoPlayList.find();
    res.status(200).json(videoPlayLists);
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No Video Playlist with that ID" });
    }

    const videoPlayList = await VideoPlayList.findById(id);
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
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No Video Playlist with that ID" });
    }

    const videoPlayList = await VideoPlayList.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(videoPlayList);

  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export async function remove(req, res) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No Video Playlist with that ID");
    }

    await VideoPlayList.findByIdAndRemove(id);
    res.json({ _id: id });

  } catch (error) {
    res.status(409).json({ message: error });
  }
}