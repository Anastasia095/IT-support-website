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
        fontWeight: 'regular',
        fontFamily: 'default',
        position: 'sticky',
        bottom: 0,
        width: '100%',
        color: 'white',
        background: '#212121'
      }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start">
          <Grid item xs={1}>
            <Typography color="secondary" component={'span'} variant={'body1'}>
              <Box sx={{ py: 2 }}>
                CONTACT US
              </Box>
            </Typography>
            <Typography display='block' variant='caption'>
              941-882-1420 Office
            </Typography>
            <Typography display='block' variant='caption'>
              941-882-1430 Fax
            </Typography>
            <Typography display='block' variant='caption'>
              email@placeholder.com
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography color="secondary" component={'span'} variant={'body1'}>
              <Box sx={{ py: 2 }}>
                LOCATION
              </Box>
            </Typography>
            <Typography variant={'body2'}>
              CompLogic, LLC.
            </Typography>
            <Typography display='block' variant='caption'>
              401 Johnson Lane Unit 103
              Venice, FL 34285
            </Typography>
            <div>
              <iframe title="gMaps" width="200" height="150" style={{ border: 0 }} loading="lazy"
                src="https://www.google.com/maps/embed/v1/search?q=CompLogic%20LLC%2C%20Johnson%20Lane%2C%20Venice%2C%20FL%2C%20USA&key=AIzaSyCnLU4vB4-iG_nuCysFum6w-2SqWq3IU-M"></iframe>
            </div>

          </Grid>
        </Grid>
        <Typography variant="caption" component="div" align="center" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} - CompLogic, LLC. All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
