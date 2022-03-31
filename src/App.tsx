import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Router from './Router/Router';
import './App.css';

const App = () => {

  return (
    <div>
      <AppBar position="static" sx={{ marginBottom: 5 }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Accueil
          </Typography>
          <Typography variant="h6" component="div">
            Favoris
          </Typography>
        </Toolbar>
      </AppBar>
      <Router />
    </div>
  );
}

export default App;
