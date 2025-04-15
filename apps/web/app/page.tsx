import React from 'react'
import { client } from "@repo/db/client";
const page = async() => {
  const user=await client.user.findFirst();
  console.log("user is -----> ",user)
  return (
    <div>
      <h1>{user?.username}</h1>
      <h1>{user?.password}</h1>
    </div>
  );
}

export default page;