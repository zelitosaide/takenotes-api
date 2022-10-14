import express from "express";

import {
  get,
  // getById,
  create,
  update,
  remove,
  getByPlaylistId
} from "../controllers/videoPlayLists.js";

const router = express.Router();

router.get("/", get);
// router.get("/:id", getById);
router.get("/:playlistId", getByPlaylistId);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;