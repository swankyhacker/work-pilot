import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Avatar } from "@mui/material";
import Application from "../components/Dashboard/Application";
import { LineChart } from "../components/Dashboard/LineChart";
import { Divider, Box } from "@mui/material";

const applications = [
  { Company: "af", Date: "asd", Status: "afg", Role: "afgs" },
];

const applicationTiles = applications.map((application) => (
  <>
    <Application
      Company={application.Company}
      Date={application.Date}
      Role={application.Role}
      Status={application.Status}
    />
    <Divider />
  </>
));

function Dashboard() {
  return (
    <div className="h-screens flex justify-around">
      <div className="w-full m-4">
        <div className="flex flex-row flex justify-between w-full">
          <div className="flex shadow-md rounded-md bg-white px-5 py-2">
            <BusinessCenterIcon sx={{ color: "#22C55E", fontSize: 60 }} />
            <div className="flex flex-col">
              Applied
              <span className="text-green-500 text-2xl">53</span>
            </div>
          </div>
          <div className="flex shadow-md rounded-md bg-white px-5 py-2">
            <CancelIcon color="error" sx={{ fontSize: 60 }} />
            <div className="flex flex-col">
              Rejected
              <span className="text-red-500 text-2xl">34</span>
            </div>
          </div>
          <div className="flex shadow-md rounded-md bg-white px-5 py-2">
            <PendingActionsIcon sx={{ color: "#FACC15", fontSize: 60 }} />
            <div className="flex flex-col">
              Pending
              <span className="text-yellow-400 text-2xl">19</span>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md bg-white px-5 py-2 w-full my-4">
          <span className="font-bold">Job Applications</span>
          <LineChart />
        </div>
        <div className="shadow-md rounded-md bg-white px-5 py-2 w-full my-4">
          <span className="font-bold">Recent Job Aplications</span>
          <Application
            Company={"Company"}
            Date={"Date"}
            Status={"Status"}
            Role={"Role"}
            IsTitle={true}
          />
          <Divider sx={{ borderBottomWidth: 3 }} />
          {applicationTiles}
        </div>
      </div>
      <div className="bg-violet-400 justify-items-center px-10 py-4 shadow-md rounded-md m-4 w-1/3">
        <Avatar />
        <p>Name Name</p>
        <p>Age</p>
        <p>Occupation</p>
      </div>
    </div>
  );
}

export default Dashboard;
