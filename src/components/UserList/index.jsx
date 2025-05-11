import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList({ setRightText }) {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const lay=async()=>{
      try{
        const res=await axios.get("http://localhost:8081/api/user/list");
        setUsers(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    lay();
  },[]);
  return (
    <div>
      <Typography variant="body1">UserList</Typography>
      <List component="nav">
        {users.map((item) => (
          <>
            <ListItem>
              <Link to={`/users/${item._id}`}>
                <ListItemText primary={item.last_name} />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <Typography variant="body1"></Typography>
    </div>
  );
}

export default UserList;
