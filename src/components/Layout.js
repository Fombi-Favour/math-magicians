import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="sections">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
