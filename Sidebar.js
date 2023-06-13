import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from './Images/Home.png';
import MarkView from './Images/MarkView.png'
import Tools1 from './Images/Tools1.png';
import Settings from './Images/Settings.png';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dropup from './Images/Dropup.png';
import Dropdown from './Images/Dropdown.png';
import Home1 from './Images/Home1.png';
import MarkView1 from './Images/MarkView1.png';
import Tools2 from './Images/Tools2.png';
import Admin from '../src/Admin/Admin'
import User from './Admin/User';
import ViewRequest from './Admin/ViewRequest';
import GroupListing from './Admin/GroupListing';
import AddGroup from './Admin/AddGroup';
import AddUser from './Admin/AddUser';
import MyRequest from './User/MyRequest';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {

  const {id} = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [manageAssetsOpen, setManageAssetsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [rolesAndPermissionsOpen, setrolesAndPermissionsOpen ] = useState();
  const [viewPermissionsOpen, setViewPermissionsOpen ] = useState();
  const [editPermissionsOpen, setEditPermissionsOpen ] = useState();
  const [manageAssetsImage, setManageAssetsImage] = useState('dropup');
  const [settingsImage, setSettingsImage] = useState('dropup');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleManageAssetsOpen = () => {
    if (open) {
      setManageAssetsOpen(!manageAssetsOpen);
      setManageAssetsImage(manageAssetsOpen ? 'dropup' : 'dropdown');
    }
  };

  const handleSettingsOpen = () => {
    if (open) {
      setSettingsOpen(!settingsOpen);
      setSettingsImage(settingsOpen ? 'dropup' : 'dropdown');
    }
  };

  const handleRolesAndPermissionsOpen = () => {
    if (open) {
      setrolesAndPermissionsOpen(!rolesAndPermissionsOpen);

    }
  };

  const handleViewPermissionsOpen = () => {
    if (open) {
      setViewPermissionsOpen(!viewPermissionsOpen);
   
    }
  };

  const handleEditPermissionsOpen = () => {
    if (open) {
      setEditPermissionsOpen(!editPermissionsOpen);
     
    }
  };
  
const icons = [
  { active: Home1, inactive: Home },
  { active: MarkView1, inactive: MarkView },
  { active: Tools1, inactive: Tools2 },
  { active: Settings, inactive: Settings },
];

const [activeIndex, setActiveIndex] = useState(null);

  return (
  
  
    <Box sx={{ display: 'flex'}}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" sx={{ boxShadow: 'none', marginTop: '10px', width: '60px', marginRight: '1220px' }} color='transparent'  open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              top: '80px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}  PaperProps={{
      sx: { top: '80px', height: '86.7%', backgroundColor: '#D6D6D6'}
      }}>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{marginTop: '20px'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

         <List>
          {[
            { text: 'Dashboard', icon: Home },
            { text: 'View Request', icon: MarkView },
            { text: 'Manage Assets', icon: Tools1 },
            { text: 'Settings', icon: Settings },
          ].map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: 'block' }}
            >
              <ListItemButton
                sx={{
                  minHeight: 8,
                  px: 2.5,
                  flexDirection: 'column',
                }}
                component={Link}
                to={index === 0 ? '/' : index === 1 ? '/view_request' : index === 2 ? '/manage' : index === 3 ? '/setting' : null}
                onClick={() => {
                  if (index === 2) {
                    handleManageAssetsOpen();
                  } else if (index === 3) {
                    handleSettingsOpen();
                  }
                  setActiveIndex(index);
                }}
              >
                <ListItemIcon sx={{ minHeight: 8 }}>
                  <img src={index === activeIndex ? icons[index].active : icons[index].inactive} alt='logo' className='sidebar_home' />
                </ListItemIcon>

                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, textAlign: 'center' }} />

                {index === 3 && (
                  <ListItemIcon sx={{ minHeight: 8, marginTop: 'auto' }}>
                    <img src={settingsImage === 'dropup' ? Dropup : Dropdown} alt='logo' className='drop' />
                  </ListItemIcon>
                )}

                {index === 2 && (
                  <ListItemIcon sx={{ minHeight: 8, marginTop: 'auto' }}>
                    <img src={manageAssetsImage === 'dropup' ? Dropup : Dropdown} alt='logo' className='drop' />
                  </ListItemIcon>
                )}
              </ListItemButton>
              
      {index === 2 && (
        <List component="div" disablePadding sx={{ display: manageAssetsOpen ? 'block' : 'none', marginLeft: 5.5 }}>
          <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate(`/user_profile/646cd322a8fdbb3ccc91db75`)}}>
            <ListItemText primary="View All Assets" />
            {id}
          </ListItemButton>

          <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate('/track_asset')}}>
            <ListItemText primary="Track Asset Status" />
          </ListItemButton>

          <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate('/device_usage')}}>
            <ListItemText primary="Device Usage History" />
          </ListItemButton>
        </List>
      )}


{index === 3 && (
  <List component="div" disablePadding sx={{ display: settingsOpen ? 'block' : 'none', marginLeft: 0 }}>

    <ListItemButton sx={{ minHeight: 48 }} onClick={handleRolesAndPermissionsOpen}>
      <ListItemText primary="Roles & Permissions" />
    </ListItemButton>

    <ListItemIcon sx={{ minHeight: 8, marginTop: 'auto' }}>
      {rolesAndPermissionsOpen ? (
        <img src={Dropdown} alt='logo' className='drop' />
      ) : (
        <img src={Dropup} alt='logo' className='drop' />
      )}
    </ListItemIcon>

    {rolesAndPermissionsOpen && (
      <List component="div" disablePadding>
        <ListItemButton sx={{ minHeight: 8 }} onClick={() => {navigate('/create_group')}}>
          <ListItemText primary="Create Group" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate('/delete_group')}}>
          <ListItemText primary="Delete Group" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate('/add_user')}}>
          <ListItemText primary="Add Users" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }} onClick={() => {navigate('/remove')}}>
          <ListItemText primary="Remove" />
        </ListItemButton>
      </List>
    )}

    <ListItemButton sx={{ minHeight: 48 }} onClick={handleViewPermissionsOpen}>
      <ListItemText primary="View Permissions" />
    </ListItemButton>

    {viewPermissionsOpen && (
      <List component="div" disablePadding>
        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="View 1" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="View 2" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="View 3" />
        </ListItemButton>
      </List>
    )}

    <ListItemButton sx={{ minHeight: 48 }} onClick={handleEditPermissionsOpen}>
      <ListItemText primary="Edit Permissions" />
    </ListItemButton>

    {editPermissionsOpen && (
      <List component="div" disablePadding>
        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="Edit Permission" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="Edit Permission 1" />
        </ListItemButton>

        <ListItemButton sx={{ minHeight: 48 }}>
          <ListItemText primary="Edit Permission 2" />
        </ListItemButton>
      </List>
    )}
  </List>
)}     
    </ListItem>
  ))}
</List>  

      </Drawer>

       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

        <DrawerHeader />
      {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit.
           Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. 
           If you look at ProductTable (lavender), youll see that the table heade
          (containing the “Name” and “Price” labels) isn't its own component. 
          This is a matter of preference, and you could go either way. For this example, it is a part of 
          ProductTable because it appears inside the ProductTable's list. However, if this header grows to be 
          complex (e.g., if you add sorting), you can move it into its own ProductTableHeader component.
          Now that you've identified the components in the mockup, arrange them into a hierarchy. 
          Components that appear within another component in the mockup should appear as a child in the 
          hierarchy
        </Typography> 

        <Typography paragraph>
           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit.
           Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. 
           If you look at ProductTable (lavender), youll see that the table heade
          (containing the “Name” and “Price” labels) isn't its own component. 
          This is a matter of preference, and you could go either way. For this example, it is a part of 
          ProductTable because it appears inside the ProductTable's list. However, if this header grows to be 
          complex (e.g., if you add sorting), you can move it into its own ProductTableHeader component.
          Now that you've identified the components in the mockup, arrange them into a hierarchy. 
          Components that appear within another component in the mockup should appear as a child in the 
          hierarchy
        </Typography>  */}

      
        <ViewRequest/>

      
      </Box> 
    </Box>
  
  );

  
}
