import EmailItems from "./emailItems";

export default function EmailDrawer({ company }) {
  return (
    <div className="w-full h-full items-start pt-14 bg-[#1E1F22] opacity-90">
      <div className=" w-full flex flex-wrap items-center ">
        <EmailItems company={company} />
        <EmailItems company={company} />
        <EmailItems company={company} />
        <EmailItems company={company} />
      </div>
    </div>
  );
}
