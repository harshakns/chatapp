const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const Users = require("./users");

const PORT = process.env.PORT || 3005;
const ROOM = "GENERAL";

const app = express();
app.use(bodyparser({ extended: { urlEncoded: true } }));
app.use(cors());

const usersdb = new Users();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/alive", (req, res) => {
  res.json({ status: "alive" }).status(200);
});

io.on("connection", (socket) => {
  console.log(socket.id, "a user connected");
  socket.join(ROOM);
  socket.on("message", (data) => {
    socket.to(ROOM).emit("message", data);
  });
});

server.listen(PORT, () => {
  console.log(`I am running on port:${PORT}`);
});
