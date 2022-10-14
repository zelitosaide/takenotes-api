import express from "express";

import {
  get,
  create,
  update,
  remove,
  getByPlaylistId
} from "../controllers/videoPlayLists.js";

const router = express.Router();

router.get("/", get);
router.get("/:playlistId", getByPlaylistId);
router.post("/", create);
router.patch("/:playlistId", update);
router.delete("/:playlistId", remove);

export default router;