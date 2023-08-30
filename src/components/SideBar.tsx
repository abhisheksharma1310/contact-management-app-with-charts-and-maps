import React from 'react'
import {useNavigate} from 'react-router-dom';
import usePaths from '../utils/usePaths';

const SideBar: React.FC = () => {

    const navigate = useNavigate();
    //get header name from usePaths hook
    const path = usePaths();

    const contactButton = {
        color: path === "Contact Page" ? "blue" : "white"
    }

    const dashboardButton = {
        color: path === "Charts and Maps" ? "blue" : "white"
    }

  return (
    <div className='flex lg:flex-col lg:min-h-screen gap-4 p-6 text-white'>
        <button className='bg-blue-400 p-2 rounded' type='button' style={contactButton} onClick={() => navigate('/')}>Contacts</button>
        <button className='bg-blue-400 p-2 rounded' type='button' style={dashboardButton} onClick={() => navigate('/dashboard')}>Charts and Maps</button>
    </div>
  )
}

export default SideBar