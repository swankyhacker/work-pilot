import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import * as React from "react";

export default function RolesTab({ role }) {
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
          <div className="w-4/5 text-white text-center">{role.Role}</div>
          <div className="w-1/5">
            {role.Status === "REJECTED" ? (
              <CancelRoundedIcon color="error" />
            ) : role.Status === "PENDING" ? (
              <PendingOutlinedIcon color="primary" />
            ) : (
              <VerifiedIcon color="success" />
            )}
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}
