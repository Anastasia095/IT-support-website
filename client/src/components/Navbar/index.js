import * as React from 'react';
import { AppBar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Button from '@mui/material/Button';
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportIcon from '@mui/icons-material/Support';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";

const style = {
  m: 2,
  color: 'white',
  borderRadius: 15,
};


function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem> tgest 1</ListItem>
        <ListItemButton>Test 2</ListItemButton>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined} />
              
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CompLogic
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button startIcon={<AlternateEmailIcon />} sx={{ ...style }} variant="contained" size="small">email@sample.com</Button>
            <Button startIcon={<LocalPhoneIcon />} sx={{ ...style }} variant="contained" size="small">786-483-6751</Button>
            <Button startIcon={<SupportIcon />} sx={{ ...style }} variant="contained" size="small">Submit Ticket</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>

  )
};
export default Navbar;
