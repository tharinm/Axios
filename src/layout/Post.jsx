import { Stack } from "@mui/material";
import { postOwner } from "../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PostList from "./Posts/PostList";

export default function Post() {
  const { id} = useContext(postOwner);
  const [post, setPost] = useState([]);

    //  console.log(id);

  useEffect(() => {
    const posts = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
   
   posts()
   
   
   
  }, [id]);
//   console.log(post);

  return (
    <div>
      <Stack flexDirection="column" gap="30px">
      {post.map((val) => {
      return <PostList key={val.id} post={val}  />;
      })}
      </Stack>
    </div>
  );
}
