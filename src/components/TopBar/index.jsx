import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "./styles.css";

function TopBar({ rightText, setCheckBox, check }) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Nguyễn Gia Hiệp - B22DCCN297
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={check}
              onChange={(e) => setCheckBox(e.target.checked)}
              color="default"
            />
          }
          label="Enable Advanced Features"
          sx={{ marginLeft: "auto", marginRight: 2 }}
        />
        <Typography variant="h6" color="inherit" sx={{ marginLeft: "auto" }}>
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
