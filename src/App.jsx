import Post from "./layout/Post";
import Users from "./layout/Users";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState([]);

  // console.log(user);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      width="1920px"
    >
      <Stack
        direction="row"
        sx={{}}
        spacing={5}
        // alignItems="center"
        // justifyContent="center"
      >
        <Users user={user} setUser={setUser} />
        <Post />
      </Stack>
    </Stack>
  );
}
