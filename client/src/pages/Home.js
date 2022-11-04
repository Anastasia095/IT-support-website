import React from 'react';
import { Box } from "@material-ui/core";
import AnimatedCarousel from '../components/Carousel';
import ActionAreaCard from '../components/Cards';

const Home = () => {
  return (
    <React.Fragment>
      <AnimatedCarousel/>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 6  }}>
        <ActionAreaCard sx={{ m: 1 }}/>
        <ActionAreaCard sx={{ m: 0.5 }}/>
        <ActionAreaCard sx={{ m: 0.5 }}/>
      </Box>
    </React.Fragment>
  );
};

export default Home;
