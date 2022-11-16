import React from 'react';
import { Box } from "@material-ui/core";
import PropTypes from 'prop-types';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Item>1</Item>
        <Item>2</Item>
      </Box>
    </div>
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
const About = () => {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
  <Item>1</Item>
  <Item>2</Item>
</Box>
  );
};

export default About;
