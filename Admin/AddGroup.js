import axios from 'axios';
import ReusableForm from './form';

function AddGroup() {
  const handleSubmit = async (formData) => {
    formData.active=true;
    try {
      const response = await axios.post('http://192.168.1.106:3000/api/group', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const formFields = [
    { label: 'Group Name', name: 'groupName', type: 'text' },
    { 
      label: 'Group Level',
      name: 'groupLevel',
      type: 'select',
      options: [
        { value: '1', label: 'Admin' },
        { value: '2', label: 'Manager' },
        { value: '3', label: 'Associates' }
      ]
    },
  ];
  
  return (
    <div className='main-div'>
      <p style={{marginLeft: "100px", marginTop: "-50px"}}>AddUser</p>

      <ReusableForm
        // title="My Form"
        fields={formFields}
        onSubmit={handleSubmit}
        // breadcrumbs={breadcrumbs}
      />
    </div>
  );
}

export default AddGroup;
