import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import LinkedInIcon from '../assets/icons/linkedin.png';
import GitHubIcon from '../assets/icons/github.svg';
import FacebookIcon from '../assets/icons/facebook.png';
import GmailIcon from '../assets/icons/gmail.png';
import SharedBox from '../shared/Box';

const DiscoverSection = () => {
  return (
    <Box sx={{ mt: 12, px: 2 }}>
        <Typography variant="h3" align="center" gutterBottom>
            Discover Me
        </Typography>    
        <Grid container spacing={4} mt={2} justifyContent="center">
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <SharedBox
              element={
                <>
                  <a href="https://www.linkedin.com/in/thakorkrishna/" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    <Box 
                      sx={{
                        textAlign: "center",
                        padding: 2,
                        borderRadius: 2,
                        backgroundColor: '#0077b5',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#005582',
                        }
                      }}
                    >
                      <img className="img-fluid" src={LinkedInIcon} height="50px" width="50px" alt="LinkedIn" />
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>LinkedIn</Typography>
                    </Box>
                  </a>
                </>
              }
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <SharedBox
              element={
                <>
                  <a href="https://github.com/k-thakor" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    <Box 
                      sx={{
                        textAlign: "center",
                        padding: 2,
                        borderRadius: 2,
                        backgroundColor: '#333',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#222',
                        }
                      }}
                    >
                      <img className="img-fluid" src={GitHubIcon} height="50px" width="50px" alt="GitHub" />
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>GitHub</Typography>
                    </Box>
                  </a>
                </>
              }
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <SharedBox
              element={
                <>
                  <a href="https://www.facebook.com/profile.php?id=100068246532333" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                    <Box 
                      sx={{
                        textAlign: "center",
                        padding: 2,
                        borderRadius: 2,
                        backgroundColor: '#4267B2',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#365899',
                        }
                      }}
                    >
                      <img className="img-fluid" src={FacebookIcon} height="50px" width="50px" alt="Facebook" />
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>Facebook</Typography>
                    </Box>
                  </a>
                </>
              }
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}>
            <SharedBox
              element={
                <>
                  <a href="mailto:krishna.7thakor@gmail.com" target="_blank" style={{ textDecoration: "none" }} rel="noopener noreferrer">
                    <Box 
                      sx={{
                        textAlign: "center",
                        padding: 2,
                        borderRadius: 2,
                        backgroundColor: '#D44638',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#b33b2e',
                        }
                      }}
                    >
                      <img className="img-fluid" src={GmailIcon} height="50px" width="50px" alt="Gmail" />
                      <Typography variant="subtitle1" sx={{ mt: 1 }}>Gmail</Typography>
                    </Box>
                  </a>
                </>
              }
            />
          </Grid>
        </Grid>

    </Box>
  );
};

export default DiscoverSection;
