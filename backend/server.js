const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const signleChat = chats.find((c) => c._id === req.params.id);
  res.send(signleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is started on port ${PORT}`));
