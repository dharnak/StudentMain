'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Niv: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(2, 46, 32)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Student Dashboard
        </Typography>
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="/home" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/student-entry" passHref>
              <Button color="inherit">Student Entry</Button>
            </Link>
            <Link href="/student-details" passHref>
              <Button color="inherit">Student Details</Button>
            </Link>
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton size="large" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/student-entry" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Student Entry
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="/student-details" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Student Details
                </Link>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Niv;
