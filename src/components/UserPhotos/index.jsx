import React, { useState,useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Cm({ anh }) {
  const com = anh;
  return (
    <Box sx={{ pl: 2 }}>
      {com.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "flex-start", mt: 2 }}
        >
          <Avatar sx={{ mr: 2 }}>{item.user_id}</Avatar>
          <Box>
            <Typography
              variant="subtitle2"
              component={Link}
              to={`/users/${item.user_id}`}
              color="primary"
              sx={{ textDecoration: "none" }}
            >
              {item.user_id}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
            >
              {item.date_time}
            </Typography>
            <Typography variant="body2">{item.comment}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function UserPhotos({ setRightText, check }) {
  const user = useParams();
  const [anh, setAnh] = useState([]);
  useEffect(() => {
    const lay = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/photo/" + user.userId);
        setAnh(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    lay();
  }, []);
  const [index, setIndex] = useState(0);
  setRightText("Photo of " + user.userId);
  const handleNext = () => {
    if (index < anh.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  if (!anh || anh.length === 0) {
    return <Typography variant="h6">Không có ảnh để hiển thị.</Typography>;
  }
  return (
    <div>
      {!check && (
        <Box sx={{ overflowY: "auto", p: 2 }}>
          {anh.map((item, index) => (
            <Card key={index} sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="400"
                image={`/${item.file_name}`}
                alt={item.file_name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {item.date_time}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Cm anh={item.comments} />
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {check && (
        <Box sx={{ p: 2 }}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="400"
              image={`/${anh[index].file_name}`}
              alt={anh[0].file_name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {anh[0].date_time}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Cm anh={anh[index].comments} />
            </CardContent>
          </Card>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
            justifyContent="center"
          >
            <Button
              variant="outlined"
              onClick={handlePrev}
              disabled={index === 0}
            >
              ← Previous
            </Button>
            <Button
              variant="outlined"
              onClick={handleNext}
              disabled={index === anh.length - 1}
            >
              Next →
            </Button>
          </Stack>
        </Box>
      )}
    </div>
  );
}

export default UserPhotos;
