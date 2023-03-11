import { useState } from "react";
import CompanyDrawers from "../components/emailClient/companyDrawer";
import RolesDrawer from "../components/emailClient/rolesDrawer";
import EmailDrawer from "../components/emailClient/emailDrawer";
import EmailPanel from "../components/emailClient/emailPanel";

const company = {
  TIKTOK: "TikTok",
  FACEBOOK: "Facebook",
  TITANSOFT: "Titansoft",
  BINANCE: "Binance",
  AWS: "AWS",
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
      { Role: "Business Development Intern", Status: "PENDING" },
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

export default function EmailClient() {
  const [company, setCompany] = useState(data[0]);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-20 h-full">
        <CompanyDrawers data={data} setCompany={setCompany} />
      </div>
      <div className="w-2/12 h-full">
        <RolesDrawer company={company} />
      </div>
      <div className="w-4/12 h-full">
        <EmailDrawer company={company.company} />
      </div>
      <div className="w-6/12 h-full">
        <EmailPanel company={company.company} />
      </div>
    </div>
  );
}
