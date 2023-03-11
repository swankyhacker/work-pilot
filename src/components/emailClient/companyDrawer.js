import CompanyItems from "./companyItems";

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

export default function CompanyDrawers({ setCompany, data }) {
  const onClickIconTab = (newCompany) => {
    const filteredData = data.filter((item) => {
      return item.company === newCompany;
    });
    console.log(filteredData);
    setCompany({ ...filteredData[0] });
  };

  return (
    <div className="w-full h-full items-start pt-14 bg-[#1E1F22]">
      <div className=" w-full p-1 flex flex-wrap items-center ">
        {Object.keys(images).map((item) => {
          return (
            <CompanyItems
              onClick={() => onClickIconTab(item)}
              image={images[item]}
            />
          );
        })}
      </div>
    </div>
  );
}
