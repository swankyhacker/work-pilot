import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Avatar } from "@mui/material";
import Application from "../components/Dashboard/Application";
import { LineChart } from "../components/Dashboard/LineChart";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Divider, Box } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

const applications = [
    { Company: "TikTok", Date: "12/3/2023", Status: "Pending", Role: "Software Engineer Intern" },
    { Company: "TikTok", Date: "12/3/2023", Status: "Pending", Role: "AI Intern" },
    { Company: "TikTok", Date: "12/3/2023", Status: "Pending", Role: "Research Intern" },
    { Company: "AWS", Date: "11/3/2023", Status: "Pending", Role: "Solutions Architect" },
    { Company: "Binance", Date: "10/3/2023", Status: "Pending", Role: "Smart Contract Developer" },
    { Company: "Titansoft", Date: "9/3/2023", Status: "Pending", Role: "Software Engineer" },
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

const cards = {
    "Accepted": {
        card: <BusinessCenterIcon sx={{ color: "#22C55E", fontSize: 80 }} />,
        textColor: "text-green-500",
        number: 19
    },
    "Rejected": {
        card:<CancelIcon color="error" sx={{ fontSize: 80 }} />,
        textColor: "text-red-500",
        number: 34
    },
    "Pending": {
        card: <PendingActionsIcon sx={{ color: "#FACC15", fontSize: 80 }} />,
        textColor: "text-yellow-500",
        number: 47
    },
    "Applied":{
        card: <InsertDriveFileIcon sx={{ color: "#1F2232", fontSize: 80 }} />,
        textColor: "text-black",
        number: 106
    }
}

function Dashboard() {
    const data = {
        success: 14,
        failed: 25,
        pending: 34
    }
    const total = data.failed + data.pending + data.success

    return (
        <div className="h-screens flex justify-around bg-[#f4f5f7] p-3">
            <div className="w-3/4 m-4">
                <div className="flex flex-row flex justify-between w-full ">
                    {Object.keys(cards).map(item => {
                        return (
                            <div className={`flex shadow-md rounded-md px-9 py-6 bg-[white]`}>
                                {cards[item].card}
                                <div className="flex flex-col justify-around items-center ml-4">
                                    <span className="font-bold text-lg">{item}</span>
                                    <span className={`font-bold ${cards[item].textColor} text-3xl`}>{cards[item].number}</span>
                                </div>
                            </div>)
                    })}

                </div>
                <div className="shadow-md rounded-md bg-white px-5 py-2 w-full my-4">
                    <div className="font-bold text-2xl mb-4">Job Applications Status</div>
                    <LineChart />
                </div>
                <div className="shadow-md rounded-md bg-white px-5 py-2 w-full my-4">
                    <div className="font-bold text-2xl pb-4">Recent Job Aplications</div>
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
            <div className="w-1/4">
                <div className="flex  mt-4 px-8 py-7 shadow-md rounded-md w-full bg-white">
                    <Avatar
                        src="https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg"
                        sx={{ height: 70, width: 70 }}
                    />
                    <div className="flex flex-col ml-4">
                        <p className="font-bold">John Doe</p>
                        <p className="font-bold">Software Engineer</p>
                        <p className="font-bold">Shopee</p>
                    </div>
                </div>
                <div className="px-10 py-4 shadow-md rounded-md w-full mt-4 bg-white">
                    <p className="font-bold text-xl">Latest Email Update</p>
                    <div className="flex py-2">
                        <Avatar src="https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png" sx={{ width: 60, height: 60 }} />
                        <div className="flex flex-col px-3">
                            <span className="font-bold text-lg">Front End Developer</span>
                            <span className="text-base">Pending</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg mr-1">
                            <span>Go To Email</span>
                        </button>
                    </div>
                </div>
                <div className=" py-4 shadow-md rounded-md mt-4 w-full bg-white">
                    <span className="text-xl font-bold px-10">Application Summary</span>
                    <div className="flex justify-evenly mt-4">
                        <PieChart className="w-2/6"
                            data={[
                                { title: "Success", value: data.success, color: "#22C55E" },
                                { title: "Pending", value: data.pending, color: "#FACC15" },
                                { title: "Failure", value: data.failed, color: "#DE3734" },
                            ]}
                            lineWidth={30}
                            paddingAngle={5}
                            children={<text>42%</text>}
                        />
                        <div className="flex flex-col justify-around text-lg">
                            <p className="font-bold text-green-500 aling-baseline">Accepted {Math.round(100 * data.success / total)}</p>
                            <p className="font-bold text-red-500">Rejected {Math.round(100 * data.failed / total)}</p>
                            <p className="font-bold text-yellow-400">Pending {Math.round(100 * data.pending / total)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
