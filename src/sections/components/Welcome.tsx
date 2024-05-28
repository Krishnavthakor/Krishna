import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const Welcome = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item lg={3} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            visibility: 'visible', 
            animationDuration: '2s', 
            animationDelay: '0.5s', 
            animationName: 'fadeIn',
            fontSize: { xs: '2rem', lg: '3rem' },
            textAlign: 'center'
          }}
        >
          Hello
        </Typography>
      </Grid>

      <Grid item lg={8} xs={12} sx={{ pl: { xs: 0, lg: 10 }, mt: { xs: 3, lg: 0 } }}>
        <Box className="banner-content" sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
          <Typography 
            variant="h3" 
            className="text-white intro" 
            sx={{ 
              fontSize: { xs: '1.5rem', lg: '2rem' }, 
              color: 'white', 
              animation: 'fadeIn 2s 0.5s forwards'
            }}
          >
            I'm
          </Typography>
          <Typography 
            variant="h2" 
            className="text-white intro" 
            sx={{ 
              fontSize: { xs: '2rem', lg: '3rem' }, 
              color: 'white', 
              animation: 'fadeIn 2s 0.5s forwards'
            }}
          >
            Krishna Thakor
          </Typography>
          <Typography 
            variant="body1" 
            className="designation" 
            sx={{ 
              fontSize: { xs: '1rem', lg: '1.5rem' }, 
              color: 'white', 
              mt: 1, 
              animation: 'fadeIn 2s 0.5s forwards'
            }}
          >
            Software Engineer
          </Typography>
          <Typography 
            variant="body1" 
            className="text-white" 
            sx={{ 
              fontSize: { xs: '1rem', lg: '1.25rem' }, 
              color: 'white', 
              mt: 2, 
              animation: 'fadeIn 2s 0.5s forwards'
            }}
          >
            Software engineer with over 3 years of work experience in the industry. <br />
            Quick learner, motivator. Love networking and travelling. A good team leader with effective communication skills.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Welcome;