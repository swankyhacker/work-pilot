export default function EmailItems({text, company}) {
  return (
    <div className="w-full mx-1 px-4 py-2 shadow-md shadow-black flex-col text-ellipsis box hover:bg-[#333333]">
      {text.map((item, index) => {
        return(
        <div className={`w-full overflow-hidden text-ellipsis text-white mb-3 ${index==0? "font-bold" : ""}`}>
          {item}
        </div>
        )
      })}
    </div>
  );
}
