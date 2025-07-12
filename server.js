const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Serve HTML/CSS/JS from /public

// Real-time connection handler
io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  socket.on("joinRoom", (room, username) => {
    socket.join(room);
    socket.to(room).emit("message", {
      username: "System",
      text: `${username} has joined the room.`,
      time: new Date().toLocaleTimeString(),
    });
  });

  socket.on("sendMessage", ({ room, username, text }) => {
    io.to(room).emit("message", {
      username,
      text,
      time: new Date().toLocaleTimeString(),
    });
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
