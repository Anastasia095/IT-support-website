import React from 'react';
import { Box } from "@material-ui/core";
import Button from '@mui/material/Button';
import AnimatedCarousel from '../components/Carousel';
import ActionAreaCard from '../components/Cards';
import { StayPrimaryLandscape } from '@material-ui/icons';

const style = {
  width: 250,
  height: 250,
  margin: 45,
  bgcolor: "rgba(77,77,77,0.62)"
  // display: 'flex',
  // justifyContent: 'center'
};

const bstyle = {
  my: 12.8,
  borderRadius: 0,
}

const Home = () => {
  return (
    <React.Fragment>
      <AnimatedCarousel />
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 6 }}>
        <Box textAlign='center' sx={{ ...style }}>
          <Button
          sx={{ ...bstyle }}
            color="secondary"
            variant="contained"
          >
            Learn More
          </Button>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Button
          sx={{ ...bstyle }}
            color="secondary"
            variant="contained"
          >
            Learn More
          </Button>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Button
          sx={{ ...bstyle }}
            color="secondary"
            variant="contained"
          >
            Learn More
          </Button>
        </Box>
        <Box textAlign='center' sx={{ ...style }}>
          <Button
          sx={{ ...bstyle }}
            color="secondary"
            variant="contained"
          >
            Learn More
          </Button>
        </Box>

      </Box>
    </React.Fragment>
  );
};

export default Home;
