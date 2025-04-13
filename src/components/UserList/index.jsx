import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList ({setRightText}) {
    const users = models.userListModel();
    //setRightText("All User");
    return (
      <div>
        <Typography variant="body1">
          UserList
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
                <Link to={`/users/${item._id}`}><ListItemText primary={item.first_name}/></Link>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <Typography variant="body1">
        </Typography>
      </div>
    );
}

export default UserList;
