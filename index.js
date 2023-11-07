const dotenv = require("dotenv");
const express = require("express");
const connect = require("./databases/database");
const cors = require("cors");
const router = require("./routes/route");
const app = express();
dotenv.config()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("STAR WARS API");
});
app.use(router);

app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`server started successfully at ${process.env.PORT} `);
});
