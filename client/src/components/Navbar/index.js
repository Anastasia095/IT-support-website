import * as React from 'react';
import {
  Drawer,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Menu as MenuIcon } from "@material-ui/icons";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportIcon from '@mui/icons-material/Support';
import { useState } from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { customTheme } from "../../themes/index.ts";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate  } from 'react-router-dom';


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
  '& .MuiTextField-root': { m: 1, width: '25ch' }
};

function Navbar() {
  const navigate = useNavigate();
  async function submitTicket() {

    const title = value;
    const ticket_body = textValue;

    // alert('Title is ' + title + ' body is '+ body);
    if (title && ticket_body !== undefined) {
      const response = await fetch(`http://127.0.0.1:3001/api/send`, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({ title, ticket_body }),
        headers: {
          'Content-Type': 'application/json',
          //line above is part of fetch()
        },
      });

      if (response.ok) {
        navigate("/profile");
      } else {
        console.log(response);
      };
    };
  };
  // const large = useMediaQuery(customTheme.breakpoints.up("lg"));
  // const medium = useMediaQuery(customTheme.breakpoints.up("md"));
  const small = useMediaQuery(customTheme.breakpoints.up("sm"));

  //drawer state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //modal state
  const [value, setValue] = React.useState('ticket title');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [textValue, setTextValue] = React.useState('describe your issue');
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
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
                  Menu
                </Typography>
                <List>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                      <Link href="about" color="inherit" underline="none">About</Link>
                    </ListItemText>
                  </ListItemButton>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText>
                      <Link href="login" color="inherit" underline="none">Login/SignUp</Link>
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
                <Box sx={modalStyle}
                  component="form"
                  noValidate
                  autoComplete="off">
                  <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
                    Open Ticket
                  </Typography>
                  <Box sx={{ py: 3 }}>
                    <Box sx={{ py: 1 }}>
                      <TextField
                        className='title'
                        required
                        id="outlined-required"
                        label="Required"
                        value={value}
                        onChange={handleChange}
                      />
                    </Box>
                    <Box sx={{ py: 2 }}>
                      <TextField
                        required
                        id="outlined-multiline-flexible"
                        label="Required"
                        multiline
                        value={textValue}
                        onChange={handleTextChange}
                      />
                    </Box>
                    <Box textAlign='center'>
                      <Button onClick={() => submitTicket()} sx={{ align: 'center' }} variant="contained">Submit</Button>
                    </Box>
                  </Box>
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