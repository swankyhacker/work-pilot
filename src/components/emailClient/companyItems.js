import Avatar from "@mui/material/Avatar";

export default function CompanyItems() {
  return (
    <div className="w-full h-16 my-2 b rounded-lg flex justify-center items-center bg hover:bg-[#333333]">
      <button>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </button>
    </div>
  );
}
