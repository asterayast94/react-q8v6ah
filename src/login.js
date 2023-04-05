// import React, { useState } from "react"
import React from 'react';
export default function (props) {
  let [authMode, setAuthMode] = React.useState('signin');
  // let [authMode, setAuthMode] = React.useState('start');

  checkUserLogedInStatus();
  function checkUserLogedInStatus() {
    //  alert('loging in here');
    let myAccessTokenChecker = readCookie('accessToken');
    let myFnameChecker = readCookie('username');
    var currentLocation = window.location;
    var urls = location.hostname;

    var currloc = location.pathname;

    if (myAccessTokenChecker) {
      alert('Welcome back ' + myFnameChecker);
      location.replace('/Home');
      return;
      // window.history.replaceState(null, '', 'Home');

      // location.replace('/cbe/lovely/index.html');
    } else {
      //   alert('please login first ' +myFnameChecker);
      // location.replace("/cbe/lovely/login.html");
      // changeAuthMode();
      // changePage();
    }
  }

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
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };
  const [email, setMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [loginStatus, setLoginStatus] = React.useState('');

  let loginStatus = 'Please Login';
  const handleEmail = (event) => {
    setMessage(event.target.value);

    console.log(email + ' value is:', event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);

    console.log(password + ' value is:', event.target.value);
  };

  const LoginCheck = (event) => {
    if (email == '' || password === '') {
      console.log(email + ': empty value : ', password);
      // setLoginStatus(event.target.value);
      alert('Please Enter Email and Phone');
      return;
    } else {
      console.log(email + ': login in progress : ', password);
      LoginCheckSuccess();
      //   window.history.replaceState(null, '', 'Home');
    }
  };
  ///
  async function LoginCheckSuccess() {
    var url = 'https://lovely.habeshasnet.com/love/hislogin';
    let data = {
      email: email,
      password: password,
    };

    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        // document
        //   .getElementById('wpbody-content')
        //   .getElementsByClassName('wrap')[0]
        //   .getElementsByTagName('h3')[0].innerHTML = 'Login .. ' + data.status;

        let accesstoken = data.accessToken;
        let username = data.user[0].Name;
        let email = data.user[0].Email;
        let mobile = data.user[0].Mobile;
        let fname = data.user[0].fname;
        let lname = data.user[0].lname;
        let image = data.user[0].image;

        writeCookie('accessToken', accesstoken, 3);
        writeCookie('username', username, 3);
        writeCookie('email', email, 3);
        writeCookie('mobile', mobile, 3);
        writeCookie('fname', fname, 3);
        writeCookie('lname', lname, 3);
        writeCookie('image', image, 3);
        // alert('Welcome here ' + username);

        // window.history.replaceState(null, '', 'Home');
        location.replace('/home');
        // checkUserLogedInStatus();
      });
  }

  function writeCookie(name, value, days) {
    var date, expires;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function readCookie(name) {
    var i,
      c,
      ca,
      nameEQ = name + '=';
    ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return '';
  }

  ///

  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                id="emailValue"
                className="form-control mt-1"
                onChange={handleEmail}
                placeholder="Enter email"
              />
              <h2> {email}</h2>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                onChange={handlePassword}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={LoginCheck}
              >
                Submit
              </button>

              <h2> {loginStatus}</h2>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>

            <div className="text-center">
              Not registered yet?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  } else if (authMode === 'signup') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>

            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
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
            <div className="text-center">
              Already registered?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  } else if (authMode === 'start') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Checking Status...</h3>
          </div>
        </form>
      </div>
    );
  }
}
