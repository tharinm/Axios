import Post from "./layout/Post";
import Users from "./layout/Users";
import { Stack } from "@mui/material";
import { createContext, useState } from "react";

export const postOwner = createContext({})
export const userID=createContext([])

export default function App() {
  const [user, setUser] = useState([]);
  const [id ,setId]=useState('')

  // console.log(user);

  return (
    <postOwner.Provider value={{ id, setId ,user}}>
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
          <Post  />
        </Stack>
      </Stack>
    </postOwner.Provider>
  );
}
