import { useState } from "react";
import SidebarTab from "./sidebarTab";
import SidebarTemplate from "./sidebarTemplate";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import Contacts from "../../pages/Contacts";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState();

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
            <SidebarTab
              open={open}
              icon={<DashboardIcon />}
              text={"Dashboard"}
              onClick={() => setCurrentPage(<></>)}
            />
            <SidebarTab
              open={open}
              icon={<BusinessIcon />}
              text={"Stats"}
              onClick={() => setCurrentPage(<></>)}
            />
            <SidebarTab
              open={open}
              icon={<AlternateEmailIcon />}
              text={"Contacts"}
              onClick={() => setCurrentPage(<Contacts />)}
            />
          </List>
          <Divider />
          <List>
            <SidebarTab open={open} icon={<MailIcon />} text={"Mail"} />
          </List>
        </>
      }
      page={currentPage}
    ></SidebarTemplate>
  );
}
