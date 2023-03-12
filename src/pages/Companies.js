import { useState } from "react";
import Avatar from "@mui/material/Avatar";

import CompanyCard from "../components/Companies/CompanyCard";

const company = {
  TIKTOK: "TikTok",
  FACEBOOK: "Facebook",
  TITANSOFT: "Titansoft",
  BINANCE: "Binance",
  AWS: "AWS",
};

const images = {
  [company.TIKTOK]:
    "https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w480-h960-rw",
  [company.AWS]:
    "https://scontent.fsin14-2.fna.fbcdn.net/v/t39.30808-6/269757833_4570037896366873_6631612107011390481_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k8Jp_xC5xdkAX-VvwW0&_nc_ht=scontent.fsin14-2.fna&oh=00_AfCrKrrlvVFwWp715RXah5rT9C9vsJLzYwlZd_Vkw8GaXw&oe=6412CAFF",
  [company.BINANCE]:
    "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
  [company.FACEBOOK]:
    "https://yt3.googleusercontent.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj",
  [company.TITANSOFT]:
    "https://blog.nus.edu.sg/computingcareerfair/files/formidable/37/Titansoft-Logo-300px-white-01.png",
};

const data = [
  {
    company: company.TIKTOK,
    latestRoles: [
      { Role: "Software Developer Intern", Status: "PENDING" },
      { Role: "Test Engineer Intern", Status: "SUCCESS" },
      { Role: "AI Intern", Status: "REJECTED" },
    ],
    success: 1,
    failed: 5,
    pending: 2,
  },
  {
    company: company.AWS,
    latestRoles: [
      { Role: "Solutions Architect", Status: "PENDING" },
      { Role: "IT Intern", Status: "PENDING" },
      { Role: "AI Intern", Status: "REJECTED" },
    ],
    success: 1,
    failed: 2,
    pending: 4,
  },
  {
    company: company.BINANCE,
    latestRoles: [
      { Role: "Smart Contract Developer", Status: "PENDING" },
      { Role: "Test Engineer Intern", Status: "REJECTED" },
      { Role: "AI Intern", Status: "REJECTED" },
    ],
    success: 1,
    failed: 10,
    pending: 5,
  },
  {
    company: company.FACEBOOK,
    latestRoles: [
      { Role: "Network Architecture Intern", Status: "PENDING" },
      { Role: "Test Engineer Intern", Status: "PENDING" },
      { Role: "Algorithms Intern", Status: "SUCCESS" },
    ],
    success: 1,
    failed: 15,
    pending: 8,
  },
  {
    company: company.TITANSOFT,
    latestRoles: [
      { Role: "Gaming Intern", Status: "REJECTED" },
      { Role: "Test Engineer Intern", Status: "REJECTED" },
      { Role: "AI Intern", Status: "REJECTED" },
    ],
    success: 0,
    failed: 2,
    pending: 2,
  },
];
export default function Companies() {
  const [cards, setCards] = useState(data);

  const onClickTabs = (company) => {
    const filteredCompanies = data.filter((item) => {
      return item.company === company;
    });
    setCards([...filteredCompanies]);
  };

  return (
    <div className="flex-col bg-[#f4f5f7]">
      <div className="flex-row flex justify-center mb-2 mt-2">
        <div className="py-4 px-2">Filter By:</div>
        {Object.keys(images).map((company) => {
          return (
            <button
              className="py-2 px-2 rounded-full"
              onClick={() => onClickTabs(company)}
            >
              <Avatar src={images[company]} />
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap w-11/12 ml-44 mt-6">
        {cards.map((item) => {
          return <CompanyCard data={item} image={images[item.company]} />;
        })}
      </div>
    </div>
  );
}
