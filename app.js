const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");

dotenv.config();

const port = 3001;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use();

app.use("/", (req, res) => {
  res.json("hello world");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Express server listening on port ${port}`);
});
