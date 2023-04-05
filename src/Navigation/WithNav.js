import React from 'react';
import Navbar from './Navbar.js';
import CollapsibleExample from './Nav1.js';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      {/* <Navbar /> */}
      <CollapsibleExample />
      <Outlet />
    </>
  );
};
