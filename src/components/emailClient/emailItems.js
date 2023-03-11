export default function EmailItems({ company }) {
  return (
    <div className="w-full h-28 mx-1 px-4 py-2 shadow-md shadow-black flex-col text-ellipsis box hover:bg-[#333333]">
      <h5 className="text-white font-bold block">{company}</h5>
      <div className="w-full h-3/4 overflow-hidden text-ellipsis text-white ">
        This email was sent by {company}.
      </div>
    </div>
  );
}
