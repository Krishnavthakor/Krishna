import { Grid, Typography, Paper, IconButton } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Education = () => {
    const AnimatedPaper = styled(Paper)({
        position: 'relative',
        padding: 30,
        textAlign: 'center',
        '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover > button': {
            backgroundColor: '#1565c0',
        },
    });

    const AnimatedIconButton = styled(IconButton)({
        position: 'absolute',
        top: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#1976d2',
        color: 'white',
        transition: 'background-color 0.3s ease-in-out',
    });

    return (
        <Grid container mt={12} spacing={4}>
            <Grid item xs={12} mb={5}>
                <Typography variant="h3" align="center" gutterBottom>
                    Education
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <AnimatedPaper elevation={3}>
                    <AnimatedIconButton>
                        <SchoolIcon />
                    </AnimatedIconButton>
                    <Typography variant="h4" gutterBottom>
                        Conestoga College
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Mobile Solutions Development
                    </Typography>
                    <Grid container justifyContent="center" alignItems="center">
                        <LocationOnIcon style={{ marginRight: 5, color: '#1976d2' }} />
                        <Typography variant="body2">Waterloo, Ontario, Canada</Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <CalendarTodayIcon style={{ marginRight: 5, color: '#1976d2' }} />
                        <Typography variant="body2">2022</Typography>
                    </Grid>
                </AnimatedPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <AnimatedPaper elevation={3}>
                    <AnimatedIconButton>
                        <SchoolIcon />
                    </AnimatedIconButton>
                    <Typography variant="h4" gutterBottom>
                        Uka Tarsadia University
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Bachelor of Science in Information Technology
                    </Typography>
                    <Grid container justifyContent="center" alignItems="center">
                        <LocationOnIcon style={{ marginRight: 5, color: '#1976d2' }} />
                        <Typography variant="body2">Bardoli, Gujarat, India</Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <CalendarTodayIcon style={{ marginRight: 5, color: '#1976d2' }} />
                        <Typography variant="body2">2019</Typography>
                    </Grid>
                </AnimatedPaper>
            </Grid>
        </Grid>
    );
};

export default Education;
