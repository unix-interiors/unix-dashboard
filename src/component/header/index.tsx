import { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import logo from '../../assets/logo_with_name.png';
import { Username, Wrapper } from './style';

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative" color="transparent" sx={{ zIndex: 5 }}>
      <Wrapper>
        <img src={logo} alt="Unix Interior" style={{ width: '90px' }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircle />
          <Username variant="caption">Admin</Username>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Box>
      </Wrapper>
    </AppBar>
  );
}

export default Header;
