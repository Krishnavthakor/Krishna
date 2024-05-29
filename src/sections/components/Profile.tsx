import React from 'react';
import {  Button, Grid, Paper, Typography } from '@mui/material';
import Profile from '../assets/KrishnaThakor.jpeg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Resume from "../assets/KrishnaThakor_Resume.pdf"
const ProfileComponent = () => {
  return (
    <Paper elevation={2} sx={{p:2,mt:20,borderRadius:2}}>
    <Grid container flexDirection={"row"} gap={2} justifyContent={"center"} alignItems={"center"}>
      <Grid item lg={8} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography variant="h1" sx={{ width: '100%', wordWrap: 'break-word' }}>
          Software Engineer
        </Typography>
            <Typography 
              variant="body1" 
              sx={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeInUp' }}
            >
              Highly skilled and dedicated Software Engineer with more than 3 years of experience in the field. Proven expertise in cloud technology, mobile technology, and web technology. Demonstrated ability to design, develop, and implement innovative software solutions that enhance efficiency and drive business growth. Adept at collaborating with cross-functional teams and utilizing agile methodologies to deliver high-quality products. Strong problem-solving and analytical skills, coupled with a passion for staying up to date with the latest industry trends.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button 
            startIcon={<ArrowRightAltIcon/>} 
            component="a" 
            href={Resume} 
            target="_blank"> 
            View/download my resume
            </Button>
          </Grid>
          <Grid item xs={12} >
            <Button  
            component="a" 
            href={"https://www.linkedin.com/in/thakorkrishna/"} 
            target="_blank" 
            startIcon={<ArrowRightAltIcon/>}>
            Get connected on LinkedIn
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              startIcon={<ArrowRightAltIcon />} 
              component="a" 
              href="mailto:krishna.7thakor@gmail.com"
            >
            Drop me an email at krishna.7thakor@gmail.com
            </Button>           
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <img 
          src={Profile} 
          alt="Krishna Thakor" 
          style={{ 
            width: '100%', 
            height: '90%', 
            objectFit: 'cover', 
            borderRadius: '8px' 
          }} 
        />
      </Grid>
    </Grid>
    </Paper>
  );
};

export default ProfileComponent;

             

             