export default function EmailItems() {
  return (
    <div className="w-full h-28 mx-1 px-4 py-2 shadow-md shadow-black flex-col text-ellipsis box hover:bg-[#333333]">
      <h5 className="text-white font-bold block">Title</h5>
      <div className="w-full h-3/4 overflow-hidden text-ellipsis text-white ">
        This is a long string of text for testing purposes. If this is right,
        only two line sof text should be rendered and should end in an ellipsis.
        This is a long string of text for testing purposes. If this is right,
        only two line sof text should be rendered and should end in an ellipsis.
        This is a long string of text for testing purposes. If this is right,
        only two line sof text should be rendered and should end in an ellipsis.
        This is a long string of text for testing purposes. If this is right,
        only two line sof text should be rendered and should end in an ellipsis.
      </div>
    </div>
  );
}
