import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Tools from './Images/Tools.png';
import Img from './Images/Img.png';
import Dropup from './Images/Dropup.png';
import './Sidebar.css';
import Footer from './Footer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Divider } from '@mui/material';
import { useEffect,useState } from 'react';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('lastname');
    navigate('/logout');
  };

  const handleMyProfile = () => {
    navigate('/profile');
  };


  useEffect(() => {
    const name = 'Smith';
    sessionStorage.setItem('lastname', name);
    setUserName(name);
  }, []);


  return (
    <div>
      <div>
      <div className='Rectangle1'></div>
        <img src={Tools} alt='logo' className='header_tools' />
        <p className='header_CXAssetManagement'>CX Asset Management</p>
        <p className='header_welcome'>Welcome {userName}</p>
        <p className='header_admin'>User</p>
        <img src={Img} alt='logo' className='header_img' />

        <div>
          <button className='header_btn' onClick={handleClick}>
            <img src={Dropup} alt='logo' />
          </button>

          <Menu
            id='fade-menu'
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
             <MenuItem onClick={handleMyProfile}>My Profile</MenuItem>
            <Divider/>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>


      <Footer />
    </div>
  );
}
