import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar ({ rightText }) {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar style={{ width: "100%", display: "flex", justifyContent: "space-between", overflow: "hidden" }}>
          <Typography variant="h6" color="inherit">
            Nguyễn Văn A
          </Typography>

          <Typography variant="h6" color="inherit" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {rightText}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
