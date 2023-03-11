import Avatar from "@mui/material/Avatar";

export default function CompanyItems({ image, onClick }) {
  return (
    <div className="w-full h-16 my-2 b rounded-lg flex justify-center items-center bg hover:bg-[#333333]">
      <button onClick={onClick}>
        <Avatar alt="Remy Sharp" src={image} />
      </button>
    </div>
  );
}
