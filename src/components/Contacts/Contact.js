import React from "react";

function Contact({
  Name,
  Email,
  Phone,
  Company,
  IsTitle = false,
  onClick,
  hover = true,
}) {
  return (
    <div
      className={`grid grid-cols-4 ga-x-3 items-stretch py-2 ${
        hover ? "hover:bg-[#F2F2F2]" : ""
      }`}
      onClick={onClick}
    >
      <div className={`${IsTitle ? "font-bold" : "font-normal"}`}>{Name}</div>
      <div className={`${IsTitle ? "font-bold" : "font-normal"}`}>{Email}</div>
      <div className={`${IsTitle ? "font-bold" : "font-normal"}`}>{Phone}</div>
      <div className={`${IsTitle ? "font-bold" : "font-normal"}`}>
        {Company}
      </div>
    </div>
  );
}

export default Contact;
