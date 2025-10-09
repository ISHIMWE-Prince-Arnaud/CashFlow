import dotenv from "dotenv";
import express from "express";
import { initDB } from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});