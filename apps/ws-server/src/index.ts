import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const server = new WebSocketServer({ port: 3002});

server.on("connection", async (socket) => {
  try {
    
    await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });
    socket.send("Hello from server");
  } catch (error) {
    console.log(error);
  }
 
});

