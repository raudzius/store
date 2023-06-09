import { ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover': { color: 'grey.500' },
  '&.active': { color: 'text.secondary' },
};

type Props = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const Header: React.FC<Props> = ({ darkMode, handleThemeChange }) => (
  <AppBar position="static" sx={{ mb: 4 }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box display="flex" alignItems="center">
        <Typography component={NavLink} to="/" variant="h6" color="inherit" sx={navStyles}>
          SOME-STORE
        </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Box>
      <List sx={{ display: 'flex' }}>
        {midLinks.map(({ title, path }) => (
          <ListItem key={title} component={NavLink} to={path} sx={navStyles}>
            {title.toUpperCase()}
          </ListItem>
        ))}
      </List>
      <Box display="flex" alignItems="center">
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent="4" color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: 'flex' }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem key={title} component={NavLink} to={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
