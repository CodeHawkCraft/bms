import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log("signup request received ",req.body);
  await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "sign up success",
    user: {
      username,
      password,
    },
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
