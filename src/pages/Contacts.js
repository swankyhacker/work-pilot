import React, { useState } from "react";
import { Divider, Box } from "@mui/material";
import Contact from "../components/Contacts/Contact.js";
import ContactCard from "../components/Contacts/ContactCard.js";
import Avatar from "@mui/material/Avatar";

const company = {
  TIKTOK: "TikTok",
  FACEBOOK: "Facebook",
  TITANSOFT: "Titansoft",
  BINANCE: "Binance",
  AWS: "AWS",
};
const rows = [
  {
    Name: "Mahiru Shiina",
    Phone: "44535960",
    Email: "shiina@gmail.com",
    Company: company.TIKTOK,
  },
  {
    Name: "Makise Kurisu",
    Phone: "44535960",
    Email: "kurisu@gmail.com",
    Company: company.TIKTOK,
  },
  {
    Name: "Sakurajima Mai",
    Phone: "44535960",
    Email: "mai@gmail.com",
    Company: company.BINANCE,
  },
  {
    Name: "Teruhashi Kokomi",
    Phone: "44535960",
    Email: "megami@gmail.com",
    Company: company.FACEBOOK,
  },
  {
    Name: "Smith Ervin",
    Phone: "44535960",
    Email: "bawlsofsteel@gmail.com",
    Company: company.TITANSOFT,
  },
  {
    Name: "Hana Chwaan",
    Phone: "44535960",
    Email: "hana@gmail.com",
    Company: company.AWS,
  },
];

const images = {
  [company.TIKTOK]:
    "https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w480-h960-rw",
  [company.AWS]:
    "https://scontent.fsin14-2.fna.fbcdn.net/v/t39.30808-6/269757833_4570037896366873_6631612107011390481_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k8Jp_xC5xdkAX-VvwW0&_nc_ht=scontent.fsin14-2.fna&oh=00_AfCrKrrlvVFwWp715RXah5rT9C9vsJLzYwlZd_Vkw8GaXw&oe=6412CAFF",
  [company.BINANCE]:
    "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
  [company.FACEBOOK]:
    "https://www.stocksbnb.com/wp-content/uploads/2022/08/meta-logo-1.png",
  [company.TITANSOFT]:
    "https://blog.nus.edu.sg/computingcareerfair/files/formidable/37/Titansoft-Logo-300px-white-01.png",
};

function Contacts() {
  const [selectedCard, setSelectedCard] = useState(rows[0]);
  const [contacts, setContacts] = useState(rows);

  const onClickTabs = (company) => {
    const filteredCompanies = rows.filter((item) => {
      return item.Company === company;
    });
    setContacts([...filteredCompanies]);
    setSelectedCard({ ...filteredCompanies[0] });
  };

  const onClickRows = (name) => {
    const filteredCompanies = rows.filter((item) => {
      return item.Name === name;
    });
    setSelectedCard({ ...filteredCompanies[0] });
  };

  return (
    //Contacts Page
    <div className="bg-[#f8f8f8] px-10 py-5 h-screen">
      {/* title */}
      <div className="py-2 text-xl">Contacts</div>
      <Divider />

      <div className="flex-row flex justify-center">
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

      {/* Wrapper for main content */}
      <div className="py-10 flex flex-row">
        {/* Contacts Table */}
        <div className="w-2/3 px-3 bg-white shadow-md rounded-md">
          <Contact
            Name="Name"
            Company="Company"
            Phone="Phone"
            Email="Email"
            IsTitle={true}
            hover={false}
          />
          <Divider sx={{ borderBottomWidth: 3 }} />
          {contacts.map((row, index) => {
            return (
              <>
                <Contact
                  Name={row.Name}
                  Phone={row.Phone}
                  Company={row.Company}
                  Email={row.Email}
                  onClick={() => onClickRows(row.Name)}
                />
                <Divider />
              </>
            );
          })}
        </div>
        {/* contacts card */}
        <div className="bg-white px-3 py-3 mx-10 shadow-md rounded-md">
          <ContactCard
            Name={selectedCard.Name}
            Email={selectedCard.Email}
            Company={selectedCard.Company}
            Phone={selectedCard.Phone}
            image={images[selectedCard.Company]}
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
