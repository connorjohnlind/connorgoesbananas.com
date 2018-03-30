import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AboutPage,
        path: '/about'
      },
      {
        ...ContactPage,
        path: '/contact',
      },
      {
        ...UsersPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
