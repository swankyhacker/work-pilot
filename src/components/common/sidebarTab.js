import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export default function SidebarTab({ open, icon, text, onClick, currentPage }) {
  return (
    <ListItem
      key={text}
      disablePadding
      sx={{
        display: "block",
        backgroundColor: currentPage === text ? "#109CF1" : "white",
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: currentPage === text ?"white" : "black",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: currentPage === text ?"white" : "black"}} />
      </ListItemButton>
    </ListItem>
  );
}
