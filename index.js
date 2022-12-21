import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { router as playlists } from "./routes/playlists.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use("/playlists", playlists);

app.get("/", function (_, res) {
  res.send("--- Welcome to Takenotes API ---");
});

mongoose
  .connect(CONNECTION_URL)
  .then(function () {
    app.listen(PORT, function () {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
