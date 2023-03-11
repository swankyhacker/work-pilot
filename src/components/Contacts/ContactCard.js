import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { Divider } from "@mui/material";
import React from "react";

function ContactCard({ Name, Company, Phone, Email, image }) {
  return (
    <div>
      {/* Pic and Name */}
      <div className="flex flex-row py-2">
        <img className="h-24 w-24 rounded-full" src={image} alt="mahiru" />
        <div className="mx-5 flex flex-col justify-between">
          <p>{Name}</p>
          <p>Title</p>
          <p>{Company}</p>
        </div>
      </div>

      {/* INFO */}
      <div className="flex-row py-3 flex justify-around">
        <span className="text-blue-800 font-bold">INFO</span>
        <span className="text-blue-700 font-bold">NOTES</span>
      </div>
      <Divider variant="middle" />

      <div className="flex flex-row py-2 px-5 ">
        <span className="mx-7">
          <PhoneIcon fontSize="medium" />
        </span>
        <span className="mx-7">{Phone}</span>
      </div>

      <div className="flex flex-row py-2 px-5 ">
        <span className="mx-7">
          <MailOutlineRoundedIcon fontSize="medium" />
        </span>
        <span className="mx-7">{Email}</span>
      </div>
    </div>
  );
}

export default ContactCard;
