import RolesTab from "./rolesTab";

export default function RolesDrawer({ company }) {
  return (
    <div className="w-full h-full items-start pt-14 bg-[#2F3136]">
      <div className=" w-full p-1 flex flex-wrap items-start">
        {company.latestRoles.map((item) => {
          return <RolesTab role={item} />;
        })}
      </div>
    </div>
  );
}
