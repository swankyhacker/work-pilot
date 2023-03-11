import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import VerifiedIcon from '@mui/icons-material/Verified';

const data = [
    { title: 'One', value: 10, color: '#1a9fe4' },
    { title: 'Two', value: 5, color: '#cb1939' },
];

const lastRoles = [
    { Role: "Software Developer Intern", Status: "PENDING" },
    { Role: "Test Engineer Intern", Status: "PENDING" },
    { Role: "AI Intern", Status: "REJECTED" }
]

const applications = lastRoles.map((role) =>
    <div class='flex flex-row flex justify-between'>
        <span>{role.Role}</span>
        {role.Status === 'REJECTED' ? <CancelRoundedIcon color='error' />
            : role.Status === 'PENDING' ? <PendingOutlinedIcon color='primary' />
                : <VerifiedIcon color='success' />}
    </div>
);

function CompanyCard() {
    return (
        <div className='shadow-md rounded-md w-3/12'>
            <div className="w-12/12 h-40 flex px-2 py-2">
                <div className=" w-1/2 h-3/6 relative flex flex-row">
                    
                    <div className='absolute top-0 left-0 w-2/3'>
                        <PieChart
                            data={data}
                        />
                    </div>
                    <div className='absolute top-6 left-6 w-12/12'>
                        <Avatar sx={{ width: 74, height: 74 }} className='top-0 absolute'></Avatar>
                    </div>
                </div>
                <div className=" w-1/2  relative px-3 py-5 flex flex-col flex justify-around">
                    <p>Company</p>
                    <p>Pending: 10</p>
                    <p>Rejected: 5</p>
                </div>
            </div>
            <div className="w-8/12 px-3">
                {applications}
                <button><span className='text-blue-600'>more...</span></button>
            </div> 
        </div>
    )
}

export default CompanyCard