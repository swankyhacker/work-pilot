import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function CompanyCard({ data, image }) {
  return (
    <div className="shadow-md rounded-md w-3/12 p-2 m-3 bg-white">
      <div className="w-12/12 h-40 flex px-2 py-2">
        <div className=" w-1/2 h-3/6 relative flex flex-row">
          <div className="absolute top-0 left-0 w-4/6">
            {/* <PieChart
              data={[
                { title: "Success", value: data.success, color: "#16A34A" },
                { title: "Pending", value: data.pending, color: "#D97706" },
                { title: "Failure", value: data.failed, color: "#DE3734" },
              ]}
            /> */}
          </div>
          <div className="absolute top-2 left-2 w-12/12">
            <Avatar
              src={image}
              sx={{ width: 74, height: 75 }}
              className="top-0 absolute"
            ></Avatar>
          </div>
        </div>
        <div className=" w-1/2 h-4/6 relative px-3 flex flex-col justify-between">
          <p>
            <span className="font-bold text-green-600"> Success: </span>{" "}
            {data.success}
          </p>
          <p>
            <span className="font-bold text-amber-600"> Pending: </span>{" "}
            {data.pending}
          </p>
          <p>
            <span className="font-bold text-red-600">Rejected:</span>{" "}
            {data.failed}
          </p>
        </div>
      </div>
      <div className="w-11/12 px-3">
        {data.latestRoles.map((role) => (
          <div class="flex flex-row justify-between mb-2">
            <span>{role.Role}</span>
            {role.Status === "REJECTED" ? (
              <CancelRoundedIcon color="error" />
            ) : role.Status === "PENDING" ? (
              <PendingOutlinedIcon color="primary" />
            ) : (
              <VerifiedIcon color="success" />
            )}
          </div>
        ))}
        <button>
          <span className="text-blue-600">more...</span>
        </button>
      </div>
    </div>
  );
}

export default CompanyCard;
