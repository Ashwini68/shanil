import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { labelConstants } from './constant';
import './UserMyprofile.css';

const UserMyProfile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(id);
         const response = await axios.get(`http://172.19.113.60:3000/api/userDetails/${id}`);
      
        const userData = response.data.data;
        setUserData(response.data.data);
        console.log(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
      fetchUserData();  
  }, [id]);

  return (
    <div className='box'>
      <div>
        <h2 className='profile_detail'>{labelConstants[0].title}:</h2>
        <p className='profile_id'>{labelConstants[0].id}: {userData?.id}</p>
        <p className='profile_groupId'>{labelConstants[0].group}: {userData?.groupId}</p>
        <p className='profile_username'>{labelConstants[0].username}: {userData?.name}</p>
        <p className='profile_location'>{labelConstants[0].location}: {userData?.baseLocation}</p>
        <p className='profile_role'>{labelConstants[0].role}: {userData?.role}</p>
      </div>
    </div>
  );
}
  export default UserMyProfile;
    