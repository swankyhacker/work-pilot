import React, { useRef } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';

function UploadFileButton() {
    const inputRef = useRef()

    return (
        <label className={`bg-[#109CF1] text-center text-white rounded-md px-2 py-2 shadow-[#109CF1] shadow-md w-1/3`}>
            Choose Files <UploadFileIcon />
                <input ref={inputRef}  id="uploadBox" type="file" multiple className='bg-transparent mt-4 hidden' />
        </label>
    )
}

export default UploadFileButton