import React from 'react';
import { Box } from "@material-ui/core";
import Button from '@mui/material/Button';
import { Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";

const style = {
  width: 250,
  height: 250,
  margin: 45,
  bgcolor: "rgba(77,77,77,0.85)",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const bstyle = {
  m: 2,
  borderRadius: 0,
}

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: 500,
        background: '#0B0B0B',
        justifyContent: 'center',
      }}>
        <img alt="logo" src="https://www.complogic.com/images/c2.png"></img>
      </Box>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        minHeight: '34vh'
      }}>
        <Box textAlign='center' sx={{ ...style }}>
          <Box color="primary.contrastText" >
            <Typography variant="h6">
              Support Anywhere
            </Typography>
            <Button
              sx={{ ...bstyle }}
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Box color="primary.contrastText" >
            <Typography variant="h6">
              Business Solutions
            </Typography>
            <Button
              sx={{ ...bstyle }}
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Box color="primary.contrastText" >
            <Typography variant="h6">
              Web Development
            </Typography>
            <Button
              sx={{ ...bstyle }}
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Box color="primary.contrastText" >
            <Typography variant="h6">
              New Equip/Repairs
            </Typography>
            <Button
              sx={{ ...bstyle }}
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </Box>
        </Box>

      </Box>
      
    </React.Fragment>
  );
};

export default Home;
