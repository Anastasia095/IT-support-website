import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from "./themes/index.ts";
import Home from './pages/Home';
import About from './pages/about';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import CssBaseline from "@material-ui/core/CssBaseline";
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              {/* <Route
                path="/about"
                element={<About />}
              /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider >
    </ApolloProvider>
  );
}

export default App;
