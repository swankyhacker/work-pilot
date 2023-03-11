import React from 'react'

function Dashboard() {
  return (
    <div>
        <div className='flex flex-row flex justify-around'>
            <div className='flex shadow-md rounded-md'>
                Applied
            </div>
            <div className='flex shadow-md rounded-md'>
                Rejected
            </div>
            <div className='flex shadow-md rounded-md'>
                Pending
            </div>
        </div>
    </div>
  )
}

export default Dashboard