import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";
import { Link, useParams } from "react-router-dom";

function Cm({ anh }) {
  const com = models.cm(anh);

  return (
    <Box sx={{ pl: 2 }}>
      {com.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mt: 2 }}>
          <Avatar sx={{ mr: 2 }}>{item.user.first_name[0]}</Avatar>
          <Box>
            <Typography variant="subtitle2" component={Link} to={`/users/${item.user._id}`} color="primary" sx={{ textDecoration: "none" }}>
              {item.user.first_name}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              {item.date_time}
            </Typography>
            <Typography variant="body2">{item.comment}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function UserPhotos({setRightText}) {
  const user = useParams();
  const anh = models.photoOfUserModel(user.userId);
  setRightText("Photo of "+user.userId);
  const images = require.context("../../images", false, /\.(jpg|png|jpeg)$/);

  return (
    <Box sx={{ overflowY: "auto", maxHeight: "620px", p: 2 }}>
      {anh.map((item, index) => (
        <Card key={index} sx={{ mb: 4, boxShadow: 3, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="400"
            image={images(`./${item.file_name}`)}
            alt={item.file_name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {item.date_time}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Cm anh={item} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;
