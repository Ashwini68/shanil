import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AddUser.css'
import ReusableForm from './form';

function AddUser() {
  const [group, setGroup] = useState([]);
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  
  const handleSubmit = async (formData) => {
    try {
      if (id) {
        // Editing an existing user
        const response = await axios.put(`http://172.19.113.95:3000/api/userDetails/${id}`, formData);
        console.log('Form submitted successfully:', response.data);
        // Additional logic after form submission
      } else {
        // Adding a new user
        const response = await axios.post('http://172.19.113.95:3000/api/userDetails', formData);
        console.log('Form submitted successfully:', response.data);
        // Additional logic after form submission
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const formFields = [
    { label: 'Select Group', name: 'groupId', type: 'select', options: group, value: formData.groupId || '' },
    { label: 'Name', name: 'name', type: 'text', value: formData.name || '' },
    { label: 'Email', name: 'email', type: 'email', value: formData.email || '' },
    { label: 'Base Location', name: 'baseLocation', type: 'text', value: formData.baseLocation || '' },
    { label: 'Password', name: 'password', type: 'password', value: formData.password || '' },
    { label: 'Role', name: 'role', type: 'text', value: formData.role || '' },
    
  ];

  const breadcrumbs = [
    { name: 'home', label: 'Home' },
    { name: 'form', label: 'Form' },
  ];

  useEffect(() => {
    fetchGroup();
    if (id) {
      fetchUserData();
    }
  }, [id]);

  const fetchGroup = async () => {
    try {
      const response = await axios.get('http://172.19.113.95:3000/api/group');
      const data = response.data.data;
      const options = Array.isArray(data) ?  data.map((item) => ({
        value: item._id,
        label: item.groupName,
      })): [];
      setGroup(options);
    } catch (error) {
      console.error('Error fetching Groups:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://172.19.113.95:3000/api/userDetails/${id}`);
      const userData = response.data.data;
      setFormData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
 

  return (
    <div className='add-user'>   
    <div className="main-div">
    <p>{id ? 'Edit User' : 'Add User'}</p>
      <ReusableForm
        fields={formFields}
        onSubmit={handleSubmit}
      />
    </div>
    </div> 
  );
}

export default AddUser;
