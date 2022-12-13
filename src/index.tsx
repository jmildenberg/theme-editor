import React from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, SettingsOutlined } from '@mui/icons-material';
import App from './App';
import { AppBar, Button, colors, createTheme, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    }
  }
});


root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <React.StrictMode>
    <AppBar position="fixed" color="primary" sx={{ top: "0" }}>
        <Toolbar variant="dense">
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
            <Menu/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TestBed
          </Typography>
          <IconButton size="small" aria-label="settings" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" sx={{borderRadius:3, border: '1px solid'}}>
            <SettingsOutlined/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <App />
  </React.StrictMode>
  </ThemeProvider>
);