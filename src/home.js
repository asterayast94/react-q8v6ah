import React from 'react';
// import React, { useState } from "react"
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navigation/Navbar.js';
// import Table from 'react-bootstrap/Table';
import locations from './Pages/Goats';
export default function (props) {
  let [authMode, setAuthMode] = React.useState('home');

  function openGoats() {
    // alert('clicked goats');
    setAuthMode((authMode = 'goats'));
    // location.replace('/goats');
  }

  function openHome() {
    // alert('clicked goats');
    setAuthMode((authMode = 'home'));
    // location.replace('/goats');
  }

  const changeAuthMode = (props) => {
    // if (props === 'signin') {
    //   setAuthMode((authMode = 'signin'));
    // }
    // if (props === 'signup') {
    //   setAuthMode((authMode = 'signup'));
    // }
    // if (props === 'home') {
    //   setAuthMode((authMode = 'home'));
    // }
    setAuthMode(authMode === '' ? 'signin' : 'home');
  };

  const changePage = (page) => {
    // if (page === 'signin') {
    // setAuthMode((authMode = 'signin'));

    setAuthMode((authMode = 'signin'));
    // React.useState('signin');
    // }
    // if (props === 'signup') {
    //   setAuthMode((authMode = 'signup'));
    //   React.useState('signin');
    // }
  };

  const changePage2 = (page) => {
    // if (page === 'signin') {
    // setAuthMode((authMode = 'signin'));
    // React.useState('signin');
    // }
    // if (props === 'signup') {
    setAuthMode((authMode = 'home'));
    //   React.useState('signin');
    // }
  };
  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <button onClick={changePage}>Home</button>
            <button onClick={changePage2}>in</button>

            <div className="text-center">
              Not registered yet?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  } else if (authMode === 'home') {
    return (
      <locations />
      // <div className="Auth-form-container">
      //   <h3 className="Auth-form-title">Welcome Home Boy</h3>

      //   <button onClick={openGoats}>Goats</button>
      // </div>
    );
  }
  // else if (authMode === 'goats') {
  //   return (
  //     <div className="Auth-form-container">
  //       <h3 className="Auth-form-title">Welcome Home Boy goats</h3>

  //       <button onClick={openHome}>Home</button>
  //     </div>
  //   );
  // }
}
