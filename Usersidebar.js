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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropup from './Images/Dropup.png';
import Dropdown from './Images/Dropdown.png';
import Home1 from './Images/Home1.png';
import MarkView1 from './Images/MarkView1.png';
import Myprofile from './Images/Myprofile.png';
import { Collapse } from '@mui/material';
import User from './Admin/User';



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

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [myProfileOpen, setmyProfileOpen] = useState(false);
  const [myProfileImage, setmyProfileImage] = useState('dropup');
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlemyProfileOpen = () => {
    if (open) {
      setmyProfileOpen(!myProfileOpen);
      setmyProfileImage(myProfileOpen ? 'dropup' : 'dropdown');

    }

  };

 
const icons = [
  { active: Home1, inactive: Home },
  { active: MarkView1, inactive: MarkView },
  { active: Myprofile, inactive: Myprofile },
];

const [activeIndex, setActiveIndex] = useState(null);

  return (
  
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
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

      <Drawer variant="permanent" open={open}   PaperProps={{
      sx: { top : '80px', height: '86.6%'}
      }}>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{marginTop: '20px'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

<List>
  {[
    { text: 'Dashboard', icon: Home },
    { text: 'My Requests', icon: MarkView },
    { text: 'My Profile', icon: Myprofile },
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 8,
          px: 2.5,
          flexDirection: 'column',
        }}
        component={Link}
        to={index === 0 ? '/user_dashboard' : index === 1 ? '/my_request' : index === 2 ? '/my_profile' : null}
        onClick={() => {
          if (index === 2) {
            handlemyProfileOpen();
          }
          setActiveIndex(index);
        }}
      >
        <ListItemIcon sx={{ minHeight: 8 }}>
          <img src={index === activeIndex ? icons[index].active : icons[index].inactive} alt='logo' className='sidebar_home' />
        </ListItemIcon>

        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, textAlign: 'center' }} />

        {index === 2 && (
          <ListItemIcon sx={{ minHeight: 8, marginTop: 'auto' }}>
            <img src={myProfileImage === 'dropup' ? Dropup : Dropdown} alt='logo' className='drop' />
          </ListItemIcon>
        )}
      </ListItemButton>

      {index === 2 && myProfileImage === 'dropup' && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{
                minHeight: 8,
                px: 2.5,
                flexDirection: 'column',
              }}
              component={Link}
              to='/login'
              onClick={() => {
              }}
            >
              <ListItemText primary='Log out' sx={{ opacity: open ? 1 : 0, textAlign: 'center' }} />
            </ListItemButton>
          </List>
        </Collapse>
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
        </Typography> 

        <Typography paragraph>
           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. 
        </Typography>  */}

        <User/>

      </Box>
    </Box>
  );

  
}
