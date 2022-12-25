const express = require("express");
const http = require("http");

const port = 3001;
const app = express();
const server = http.createServer(app);

app.use("/", (req, res) => {
  res.json("hello world");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Express server listening on port ${port}`);
});
