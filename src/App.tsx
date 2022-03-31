import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';
import routes from 'src/Router/routes';
import Router from './Router/Router';

const App = () => {

  return (
    <div>

      <Router />
    </div>
  );
}

export default App;
