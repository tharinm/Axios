import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { postOwner } from "../../App";
import { useContext } from "react";

export default function UserList({ val }) {
  //   console.log(val);

    const { id, setId } = useContext(postOwner);
    //console.log(id)
    
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {val.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
                  <Button variant="contained" onClick={() => {
                       setId(val.id);
          }}>Show Post</Button>
        </CardActions>
      </Card>
    </div>
  );
}
