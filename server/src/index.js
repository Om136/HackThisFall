// server.js
import express from "express";

import dbConnection from "./src/db/conn.js";

import user from "./src/models/user.model.js";

import  router from "./src/routes/user.routes.js";

const app = express();

const port = process.env.PORT || 3000;
app.use("/api",router)
app.use(express.json());

dbConnection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
});

dbConnection.once("open", () => {
  console.log("MongoDB Connection Established");
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
