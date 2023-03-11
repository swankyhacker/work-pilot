import CompanyItems from "./companyItems";

export default function CompanyDrawers() {
  return (
    <div className="w-full h-full items-start pt-14 bg-[#1E1F22]">
      <div className=" w-full p-1 flex flex-wrap items-center ">
        <CompanyItems />
        <CompanyItems />
        <CompanyItems />
        <CompanyItems />
      </div>
    </div>
  );
}
