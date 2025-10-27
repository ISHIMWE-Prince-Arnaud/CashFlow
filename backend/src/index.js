import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import job from "./config/cron.js";

import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") {
  job.start();
}

// middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
