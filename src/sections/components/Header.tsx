import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import KrishnaFeather from '../assets/icons/peacockFeather.png'

const pages: string[] = ['Home', 'Skills', 'Work Experience', 'Education', 'Discover Me'];

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function scrollToSection(className:string) {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Grid container alignItems="center">
          <Grid item xs={6} md={3} sx={{ position: 'relative' }}>
            <img src={KrishnaFeather} alt="Krishna" style={{height:"60px"}}/>
          </Grid>
            <Grid item xs={6} md={9} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
            <Grid item xs={12} md={9} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page:string) => (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page.toLowerCase().replace(/\s+/g, '-'))}
                  sx={{ my: 3, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ResponsiveAppBar;
