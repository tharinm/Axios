import UserList from "./users/UserList";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import axios from 'axios'

export default function Users({ user,setUser }) {
    useEffect(() => {
      const users = async () => {
        try {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setUser(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      users();
    }, []);
//   console.log(user);

    return <Stack flexDirection="column" gap="30px">
        {user.map((val) => {
            return <UserList val={val} key={val.id} />;
        })}
    
  </Stack>;
}
