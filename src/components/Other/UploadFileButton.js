import React, { useRef } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function UploadFileButton({ onClick }) {
    const color = "#109CF1"
    const inputRef = useRef()
    console.log("Render")
    // var selected = document.getElementById("uploadBox").files.length > 0;
    // if(selected){
    //     onClick()
    // }
    return (
        <label className={`bg-[#109CF1] text-center text-white rounded-md px-2 py-2 shadow-[#109CF1] shadow-md w-1/3`}>
            Upload Files <UploadFileIcon />
            <form onSubmit={() => console.log("Form")}>
                <input ref={inputRef}  id="uploadBox" type="file" multiple className='bg-transparent mt-4 hidden' />
                <button type='submit' > Submit</button>
            </form>
        </label>
    )
}

export default UploadFileButton