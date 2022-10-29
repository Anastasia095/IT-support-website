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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

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
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick} />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>About Us</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem onClick={handleClose}>News/Media</MenuItem>
            </Menu>
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
