import { React, useState } from 'react'
import UploadFileButton from '../components/Other/UploadFileButton'
import CircularProgress from '@mui/joy/CircularProgress';
import logo from '../assets/images/logo.png'
import { useNavigate } from "react-router-dom";

function UploadEmail() {
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(true)
    const handleUpload = () => {
        setSubmit(false)
        setTimeout(() => {
            navigate("/Dashboard")
        }, 4500)
    }
    return (
        submit ?
            <div className='flex flex-col items-center'>
                <img src={logo} className='w-1/2 h-1/5'></img>
                <UploadFileButton onClick={handleUpload} className="w-1/2" />
            </div>
            :
            <div className='flex justify-center items-center h-screen'>
                <CircularProgress size='lg' className="h-full w-full"/>
            </div>
    )
}

export default UploadEmail