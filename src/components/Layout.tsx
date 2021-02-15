import React from 'react';
import Navbar from './Navbar';
import { ChildrenProps } from '../types';

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {children}
      </div>
    </>
  )
}

export default Layout;