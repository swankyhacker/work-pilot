import React,{useState} from 'react'
import {Divider, Box} from "@mui/material"
import Contact from "../components/Contacts/Contact.js"
import ContactCard from "../components/Contacts/ContactCard.js"
import Avatar from '@mui/material/Avatar';

const rows = [
  {Name : "Mahiru Shiina", Phone: "44535960", Email: "gay", Company: "yugey", IsTtitle: false},
  {Name : "Mahiru Shiina", Phone: "44535960", Email: "gay", Company: "imgay", IsTtitle: false},
  {Name : "Mahiru Shiina", Phone: "44535960", Email: "gay", Company: "hegay", IsTtitle: false},
  {Name : "Mahiru Shiina", Phone: "44535960", Email: "gay", Company: "whogey", IsTtitle: false},
  {Name : "Mahiru Shiina", Phone: "44535960", Email: "gay", Company: "yugey", IsTtitle: false},
]

const companies = [
  {
    ImageURL: "https://anitrendz.net/news/wp-content/uploads/2022/12/the-angel-next-door-spoils-me-rotten-mahiru-shiina-visual-e1670366236946.jpg",
    Company: "yugey"
  },
  {
    ImageURL: "https://image.myanimelist.net/ui/HX3qMo4OLrlVv6WB3jeafcE_4V0KVPNDFd15Y_lZN_nMk6MhhGzqzY9EP6T_B69B",
    Company: "imgay"
  },
  {
    ImageURL: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a43d472b52886d39fc97e59a1db3d1bc0c6e78368a086aa7fdda4d695ad86c85._RI_V_TTW_.jpg",
    Company: "hegay"
  },
  {
    ImageURL: "https://image.myanimelist.net/ui/GDSHxv6NeGiSmFWUo3uUSA-asvQL7yhjQvweHRAEuusLlGFQzZy0q01LlgtC-woS",
    Company: "whogey"
  }
]

const contacts = rows.map((row) => 
    <>
    <Contact
      Name={row.Name}
      Phone={row.Phone}
      Company= {row.Company}
      Email = {row.Email}
      IsTitle={row.IsTtitle}
    />
    <Divider/>
    </>
);

const avatars = companies.map((company) =>
  <button class="py-2 px-2 rounded-full">
    <Avatar src={company.ImageURL}/>
  </button>
);


var SelectedRow = rows[0]
var filterCompany = 'ALL'

function Contacts() {
  //const [currentFilter, setCurrentFilter] = useState()

  return (
    //Contacts Page
    <div class="bg-[#f8f8f8] px-10 py-5 h-screen">  
        {/* title */}
        <div class="py-2 text-xl">
            Contacts
        </div>
        <Divider/>

        <div class="flex flex-row flex justify-center">
          {avatars}
        </div>

        {/* Wrapper for main content */}
        <div class="py-10 flex flex-row">
            {/* Contacts Table */}
            <div class ="w-2/3 px-3 bg-white shadow-md rounded-md">
              <Contact
                Name="Name"
                Company="Company"
                Phone="Phone"
                Email="Email"
                IsTitle = {true}
              />
              <Divider sx = {{borderBottomWidth : 3}}/>
              {contacts}
            </div>
            {/* contacts card */}
            <div class="bg-white px-3 py-3 mx-10 shadow-md rounded-md">
                <ContactCard
                  Name={SelectedRow.Name}
                  Email={SelectedRow.Email}
                  Company = {SelectedRow.Company}
                  Phone = {SelectedRow.Phone}
                />
            </div>
        </div>
    </div>
  )
}

export default Contacts