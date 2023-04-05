import React from 'react';

import * as React from 'react';
import './style.css';
import Login from './login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './login';
import Home from './Pages/HomePage';
import Feedback from './Pages/Feedback';

// import Locations from './component/Goats';
import Locations from './Pages/Locations';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navigation/Navbar.js';
import Locations from './Pages/Locations';
// import Goats from './Pages/Goats';
import WithoutNav from './Navigation/WithoutNav';
import WithNav from './Navigation/WithNav';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Auth />} />
        </Route>

        <Route element={<WithNav />}>
          <Route path="/home" element={<Home />} />

          <Route path="/main" element={<Feedback />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/locations" component={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Routes>
    //   <Route element={<WithoutNav />}>
    //     <Route path="/" element={<Auth />} />
    //   </Route>
    //   <Route element={<WithNav />}>
    //     <Route path="/home" element={<Home />} />
    //   </Route>
    // </Routes>
  );
}
