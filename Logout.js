import React from 'react'
import './Logout.css';
import { dashboard } from './constant';
import { useNavigate } from 'react-router-dom';

export default function Logout() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login'); // Navigates to the '/login' route
    };
    
  return (
    <div>
    <div className='bg-div'>
      <div className='container_logout'>
        <center>
          <h6 className='h6_logout'>{dashboard[0].logout_page}</h6>
        </center>
        <button className='btn-login' onClick={handleLoginClick}>
          {dashboard[1].btn_login_logoutpg}
        </button>
      </div>
    </div>
  </div>
  )
}
