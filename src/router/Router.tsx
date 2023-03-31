import React from 'react';

import { useRoutes } from 'react-router';

import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import HomePage from '../pages/HomePage/HomePage';

const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [{ path: '', element: <HomePage /> }],
    },
  ]);

export default Router;
