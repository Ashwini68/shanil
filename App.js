
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routing/Dashboard';
import View from './Routing/View';
import Manage from './Routing/Manage';
import Setting from './Routing/Setting';
import Viewasset from './Routing/Viewasset';
import Trackasset from './Routing/Trackasset';
import Deviceusage from './Routing/Deviceusage'
import Creategroup from './Routing/Creategroup';
import Deletegroup from './Routing/Deletegroup';
import Adduser from './Routing/Adduser';
import Remove from './Routing/Remove';
import Userdashboard from './Routing/Userdashboard';
import UserMyprofile from './UserMyprofile';
import Myrequest from './Routing/Myrequest';
import Myprofile from './Routing/Myprofile';
import Login from './Login';
import Admin from './Admin/Admin';
import Logout from './Logout';
import User from './Admin/User';
import ViewRequest from './Admin/ViewRequest';
import AddGroup from './Admin/AddGroup';


function App() {
  return (
    <>
      
      {/* <BrowserRouter>
       <Routes>

        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/view_request' element={<View/>}></Route>
        <Route path='/manage' element={<Manage/>}></Route> 
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='/view_asset' element={<Viewasset/>}></Route>
        <Route path='/track_asset' element={<Trackasset/>}></Route>
        <Route path='/device_usage' element={<Deviceusage/>}></Route>
        <Route path='/create_group' element={<Creategroup/>}></Route>
        <Route path='/delete_group' element={<Deletegroup/>}></Route>
        <Route path='/add_user' element={<Adduser/>}></Route>
        <Route path='/remove' element={<Remove/>}></Route>
        <Route path='/my_request' element={<Myrequest/>}></Route>
        <Route path='/my_profile' element={<Myprofile/>}></Route>

        <Route path='/user_dashboard' element={<Userdashboard/>}></Route>
        <Route path='/user_profile/:id' element={<UserMyprofile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/user' element={<User/>}> </Route>

      </Routes> 
      </BrowserRouter>   */}

       <BrowserRouter>
  
       <Routes>

        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/user' element={<User/>}></Route>
         <Route path='/admin' element={<Admin/>}></Route>
         <Route path='/user_dashboard' element={<Userdashboard/>}></Route>
         <Route path='/view_request' element={<ViewRequest/>}></Route>
         <Route path='/manage' element={<Manage/>}></Route> 
        <Route path='/setting' element={<Setting/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/add_group' element={<AddGroup/>}></Route>
       {/* <Route path='/user' element={<User/>}> </Route>  */}


      </Routes> 
      </BrowserRouter>    



    </>
  );
}

export default App;
