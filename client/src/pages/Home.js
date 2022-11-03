import React from 'react';
import { Box } from "@material-ui/core";
import AnimatedCarousel from '../components/Carousel';
import ActionAreaCard from '../components/Cards';

const Home = () => {
  return (
    <main>
      <AnimatedCarousel />
      <Box sx={{  display: 'flex', justifyContent: 'space-between' }}>
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </Box>
    </main>
  );
};

export default Home;
