import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { customTheme } from "./themes/index.ts";
import Home from './pages/Home';
import About from './pages/about';
import SignIn from './pages/Login';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';



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
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider >
    </ApolloProvider>
  );
}

export default App;
