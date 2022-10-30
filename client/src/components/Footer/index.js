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
      <Box sx={{
        textAlign: 'center',
        fontWeight: 'regular',
        fontFamily: 'default',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        color: 'white',
        background: 'black'
      }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              Location
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
