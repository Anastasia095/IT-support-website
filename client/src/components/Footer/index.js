import React from 'react';
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Grid from '@mui/material/Grid';


const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const navigate = useNavigate();
  return (
    <footer className="page-footer font-small cyan darken-3">
      <Box color="inherit" sx={{
        textAlign: 'center',
        fontWeight: 'regular',
        fontFamily: 'default',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        color: 'white',
        background: '#212121'
      }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography color="secondary">
              <Box sx={{ py: 2 }}>
                Contact Us
              </Box>
            </Typography>
            <Typography display='block' variant='caption'>
              Link #1
            </Typography>
            <Typography display='block' variant='caption'>
              Link #2
            </Typography>
            <Typography display='block' variant='caption'>
              Link #3
            </Typography>
            <Typography display='block' variant='caption'>
              Link #4
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography color="secondary">
              <Box sx={{ py: 2 }}>
                Location
              </Box>
            </Typography>
            <Typography display='block' variant='caption'>
              Link #1
            </Typography>
            <Typography display='block' variant='caption'>
              Link #2
            </Typography>
            <Typography display='block' variant='caption'>
              Link #3
            </Typography>
            <Typography display='block' variant='caption'>
              Link #4
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} - CompLogic, LLC. All Rights Reserved.
        </Typography>
      </Box>

    </footer>
  );
};

export default Footer;
