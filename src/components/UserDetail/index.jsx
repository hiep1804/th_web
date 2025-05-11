import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";
function UserDetail({ setRightText }) {
  const { userId } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    const lay = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/user/" + userId);
        setUser(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    lay();
  }, [userId]);
  if(user)setRightText("User " + user.last_name);

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card
        sx={{ maxWidth: 500, width: "100%", boxShadow: 3, borderRadius: 3 }}
      >
        <CardContent>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar sx={{ width: 64, height: 64 }}>
              {user && user.last_name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h5">
                {user && user.last_name}
              </Typography>
              <Typography color="text.secondary">{user && user.occupation}</Typography>
            </Box>
          </Box>
          <Typography variant="body1">
            <strong>Location:</strong> {user && user.location}
          </Typography>
          <Typography variant="body1" mt={1}>
            <strong>Description:</strong> {user && user.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", px: 2 }}>
          <Button
            component={Link}
            to={`/photos/${userId}`}
            variant="contained"
            size="small"
          >
            View Photos
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UserDetail;
