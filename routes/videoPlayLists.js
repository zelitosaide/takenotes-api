import express from "express";

import {
  get,
  create,
  update,
  remove
} from "../controllers/videoPlayLists.js";

const router = express.Router();

router.get("/", get);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;