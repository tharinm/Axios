import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { postOwner } from "../../App";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList({ post }) {
  const { id } = useContext(postOwner);
  const [userName, setuserName] = useState([]);

  console.log(id);

  useEffect(() => {
    const newUser = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        setuserName(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    newUser();
  }, [id]);

  console.log(userName);

  return (
    <div>
      <Card sx={{ width: "500px" }}>
              <CardContent>
                  {userName.map((user) => {
                      return (
                        <Typography key={post.id}
                          sx={{ fontSize: 14 }}
                          variant="h6"
                          color="text.secondary"
                          gutterBottom
                        >
                         USER NAME -  {user.name}
                        </Typography>
                      );
                  })}
         
         
         
         
         
         
         
         
          <Typography
            sx={{ fontSize: 14 }}
            variant="h6"
            color="text.secondary"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            variant=""
            color="text.secondary"
            gutterBottom
          >
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
