import * as React from 'react';
import {
  AppBar,
  Drawer,
  Box,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Menu as MenuIcon } from "@material-ui/icons";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportIcon from '@mui/icons-material/Support';
import { useState } from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { customTheme } from "../../themes/index.ts";
import useMediaQuery from "@mui/material/useMediaQuery";


const style = {
  m: 2,
  borderRadius: 15,
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Navbar() {

  // const large = useMediaQuery(customTheme.breakpoints.up("lg"));
  // const medium = useMediaQuery(customTheme.breakpoints.up("md"));
  const small = useMediaQuery(customTheme.breakpoints.up("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    <Box sx={{ flexGrow: 1 }}>
      <MuiThemeProvider theme={customTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor='left'
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                  Side Panel
                </Typography>
                <List>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                      <Link href="about" color="inherit" underline="none">About</Link>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                      <Link href="#" color="inherit" underline="none">Placeholder</Link>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                      <Link href="#" color="inherit" underline="none">Placeholder</Link>
                    </ListItemText>
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
            <Box sx={{ flexGrow: 1, display: small ? 'block' : "none" }}>
              <Typography variant="h6" component="div">
                CompLogic
              </Typography>
            </Box>

            <Box display="flex" justifyContent="ceter" sx={{ flexWrap: 'wrap', marginLeft: 'auto' }}>
              <Button className="custom-btn" startIcon={<AlternateEmailIcon />}
                color="secondary"
                sx={{ ...style, display: small ? '' : "none" }}
                variant="contained"
                size="small">
                <Link className="email" style={{ textDecoration: 'none' }} sx={{ color: "#FFFFFF", display: small ? 'block' : "none" }}
                  href="mailto:email@sample.com">email@sample.com</Link>
              </Button>
              <IconButton href="mailto:email@sample.com" aria-label="email">
                <AlternateEmailIcon sx={{ display: small ? 'none' : "block" }} color="info" />
              </IconButton>
              <Button startIcon={<LocalPhoneIcon />}
                color="secondary"
                sx={{ ...style, display: small ? '' : "none" }}
                variant="contained"
                size="small">
                <Box sx={{ display: small ? '' : "none" }}>786-483-6751</Box>
              </Button>
              <IconButton aria-label="phone">
                <LocalPhoneIcon sx={{ display: small ? 'none' : "block" }} color="info" />
              </IconButton>
              <Button startIcon={<SupportIcon />}
                onClick={handleOpen}
                color="secondary"
                sx={{ ...style, display: small ? '' : "none" }}
                variant="contained"
                size="small">
                <Box sx={{ display: small ? '' : "none" }}>Submit Ticket</Box>
              </Button>
              <IconButton aria-label="phone" onClick={handleOpen}>
                <SupportIcon sx={{ display: small ? 'none' : "block" }} color="info" />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </Typography>
                </Box>
              </Modal>
            </Box>

          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </Box>


  )
};
export default Navbar;