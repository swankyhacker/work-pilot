import ClearIcon from "@mui/icons-material/Clear";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";

export default function RolesTab() {
  return (
    <Card
      sx={{
        width: "100%",
        height: 80,
        backgroundColor: "#3A3C43",
        margin: 1,
        borderRadius: 2,
        boxShadow: "1px 2px",
      }}
    >
      <CardActionArea className="w-full h-full flex">
        <div className="flex pl-6">
          <div className="w-4/5 text-white text-center">
            Software Engineering Intern
          </div>
          <div className="w-1/5">
            <ClearIcon color="error"></ClearIcon>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}
