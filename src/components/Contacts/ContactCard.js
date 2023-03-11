import React from 'react'
import {Divider, Box} from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

function ContactCard({Name, Company, Phone, Email}) {
  return (
    <div>
        {/* Pic and Name */}
        <div class="flex flex-row py-2">
            <img class="h-24 w-24 rounded-full"
                src = "https://i.pinimg.com/originals/42/2c/40/422c407705983464f021c88d648a4073.jpg"
                alt = "mahiru"
            />
            <div class="mx-5 flex flex-col justify-between">
                <p>
                    {Name}
                </p>
                <p>
                    Title
                </p>
                <p>
                    {Company}
                </p>
            </div>
        </div>

        {/* INFO */}
        <div class="flex-row py-3 flex justify-around">
            <span class="text-blue-800 font-bold">
                INFO
            </span>
            <span class="text-blue-700 font-bold">
                NOTES
            </span>
        </div>
        <Divider variant='middle'/>

        <div class="flex flex-row py-2 px-5 ">
            <span class="mx-7"><PhoneIcon fontSize='medium'/></span>
            <span class="mx-7">{Phone}</span>       
        </div>

        <div class="flex flex-row py-2 px-5 ">
            <span class="mx-7"><MailOutlineRoundedIcon fontSize='medium'/></span>
            <span class="mx-7">{Email}</span>    
        </div>
    </div>  
  )
}

export default ContactCard