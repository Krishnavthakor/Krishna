import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const WelcomeContainer = styled(Grid)({
  minHeight: '100vh',
  background: '#f1f1f1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const WelcomeContent = styled(Box)({
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const BackgroundObjects = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  '& > div': {
    background: 'linear-gradient(to bottom, #74ebd5, #ACB6E5)',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    animation: 'floating 3s infinite',
  },
  '& > div:nth-child(1)': {
    animationDelay: '0s',
  },
  '& > div:nth-child(2)': {
    animationDelay: '0.5s',
  },
  '& > div:nth-child(3)': {
    animationDelay: '1s',
  },
  '@keyframes floating': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
    '100%': { transform: 'translateY(0px)' },
  },
});

const WelcomePage = () => {
  return (
    <WelcomeContainer container>
      <BackgroundObjects>
        <div></div>
        <div></div>
        <div></div>
      </BackgroundObjects>
      <Grid item>
        <WelcomeContent>
          <Typography variant="h2" gutterBottom>
            Hello, I'm Krishna
          </Typography>
          <Typography variant="body1">
            I am a skilled Software Engineer with a passion for creating
            innovative solutions.
          </Typography>
        </WelcomeContent>
      </Grid>
    </WelcomeContainer>
  );
};

export default WelcomePage;
