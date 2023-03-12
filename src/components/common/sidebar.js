import { useState } from "react";
import SidebarTab from "./sidebarTab";
import SidebarTemplate from "./sidebarTemplate";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

import Companies from "../../pages/Companies";
import Contacts from "../../pages/Contacts";
import Dashboard from "../../pages/Dashboard";

const pages = {
  Dashboard: <Dashboard />,
  Companies: <Companies />,
  Contacts: <Contacts />,
};

const icons = {
  Dashboard: <DashboardIcon />,
  Companies: <BusinessIcon />,
  Contacts: <AlternateEmailIcon />,
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <SidebarTemplate
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
      open={open}
      sidebarItems={
        <>
          <List>
            {Object.keys(pages).map((item) => {
              return (
                <SidebarTab
                  open={open}
                  icon={icons[item]}
                  text={item}
                  currentPage={currentPage}
                  onClick={() => setCurrentPage(item)}
                />
              );
            })}
          </List>
          <Divider />
          <List>
            <Link to={`email-client`}>
              <SidebarTab open={open} icon={<MailIcon />} text={"Mail"} />
            </Link>
          </List>
        </>
      }
      page={pages[currentPage]}
    ></SidebarTemplate>
  );
}
