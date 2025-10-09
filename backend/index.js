import dotenv from "dotenv";
import express from "express";
import { initDB } from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
if (!PORT || isNaN(PORT)) {
  throw new Error("Invalid PORT configuration");
}
initDB()
  .then(() => {
    app
      .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      })
      .on("error", (err) => {
        console.error("Failed to start server:", err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });
