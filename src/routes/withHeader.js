import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router'

export default () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
