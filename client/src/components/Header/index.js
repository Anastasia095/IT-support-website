import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import ButtonAppBar from '../Navbar';
const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Sand Box
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          CompLogic
        </p>
        <ButtonAppBar />
      </div>
    </header>
  );
};

export default Header;
