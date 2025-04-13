import React, { useEffect } from "react";
import {Typography} from "@mui/material";
import models from "../../modelData/models";
import "./styles.css";
import {Link, useParams} from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail({setRightText}) {
    const user = useParams();
    const u=models.userModel(user.userId);
    setRightText("User "+u.last_name);
    return (
        <>
          <Typography variant="body1">
            <p>ID: {u._id}</p>
            <p>FN: {u.first_name}</p>
            <p>LN: {u.last_name}</p>
            <p>Location: {u.location}</p>
            <p>Description: {u.description}</p>
            <p>Occupation: {u.occupation}</p>
            <Link to={`/photos/${u._id}`}>image</Link>
          </Typography>
        </>
    );
}

export default UserDetail;
