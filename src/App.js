/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import { useTheme } from './ThemeContext';

function App() {
  const { burgerMenu } = useTheme();

  return (
    <Router>
      <div className='App' id='app-background'>
         <Navbar />
        {!burgerMenu && <Main />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
