import React from 'react';
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const navigate = useNavigate();
  return (
    <footer class="page-footer font-small cyan darken-3">
      <Box sx={{ textAlign: 'center', fontWeight: 'regular', fontFamily: 'default' }}>
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} - CompLogic, LLC. All Rights Reserved.
        </Typography>
      </Box>

    </footer>
  );
};

export default Footer;
