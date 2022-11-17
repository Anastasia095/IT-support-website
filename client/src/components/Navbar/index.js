import * as React from 'react';
import {
  AppBar,
  Drawer,
  Box,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
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

const style = {
  m: 2,
  borderRadius: 15,
};

function Navbar() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CompLogic
            </Typography>
            <Box display="flex" justifyContent="ceter" sx={{ flexWrap: 'wrap', marginLeft: 'auto' }}>
              <Button className="custom-btn" startIcon={<AlternateEmailIcon />}
                color="secondary"
                sx={{ ...style }}
                variant="contained"
                size="small">
                  <a class="email" style={{ textDecoration: 'none' }} href="mailto:email@sample.com">email@sample.com</a>  
              </Button>
              <Button startIcon={<LocalPhoneIcon />}
                color="secondary"
                sx={{ ...style }}
                variant="contained"
                size="small">
                786-483-6751
              </Button>
              <Button startIcon={<SupportIcon />}
                color="secondary"
                sx={{ ...style }}
                variant="contained"
                size="small">
                Submit Ticket
              </Button>
            </Box>

          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </Box>


  )
};
export default Navbar;