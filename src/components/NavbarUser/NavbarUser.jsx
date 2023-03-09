import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import "./NavbarUser.css"


const pages = ['Dashboard', 'Profile','Playlists','Home', 'Logout']

export default function NavbarUser() {
  const [state, setState] = React.useState({
    left: false 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
const { isLoggedIn, user, logOutUser } = useOutletContext()

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem key={pages} disablePadding>
            <ListItemButton>
            <Link underline="none" href="/dashboard" color="inherit">
                  <Typography>{pages[0]}</Typography>
            </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={pages} disablePadding>
            <ListItemButton>
            <Link underline="none" href="/profile" color="inherit">
                  <Typography>{pages[1]}</Typography>
            </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={pages} disablePadding>
          <ListItemButton>
            <Link underline="none" href='/playlists' color="inherit">
                  <Typography>{pages[2]}</Typography>
            </Link>
            </ListItemButton>
            </ListItem>
            <ListItem key={pages} disablePadding>
          <ListItemButton>
            <Link underline="none" href='/' color="inherit">
                  <Typography>{pages[3]}</Typography>
            </Link>
            </ListItemButton>
            </ListItem>
          <ListItem key={pages} disablePadding>
            <ListItemButton>
            <Link underline="none" href='/' onClick={logOutUser} color="inherit">
                  <Typography>{pages[4]}</Typography>
            </Link>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div className='navbar1'>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}