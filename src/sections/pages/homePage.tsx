// HomePage.js
import React  from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "../components/Header";
import ProfileComponent from "../components/Profile";
import ExperienceComponent from "../components/Experience";
import DiscoverSection from "../components/Discover";
import Skills from "../components/Skills";
import Education from "../components/Education";
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../shared/theme';
import {  useThemeContext } from '../context/useThemeContext';

const HomePage: React.FC = () => {
    const { theme } = useThemeContext();
    
    return (
        <MUIThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Container maxWidth={"xl"} >
                <Grid container mb={10} >
                    <Grid item xs={12} >
                    <ResponsiveAppBar/>
                    </Grid>
                    <Grid item xs={12} id="home" className="home">
                        <ProfileComponent/>
                    </Grid>
                    <Grid item xs={12}  id="skills" className="skills">
                        <Skills/>
                    </Grid>
                    <Grid item xs={12}  id="work-experience" className="work-experience">
                        <ExperienceComponent/>
                    </Grid>
                    <Grid item xs={12}  id="education" className="education">
                        <Education />
                    </Grid>
                    <Grid item xs={12}  id="discover-me" className="discover-me">
                        <DiscoverSection/>
                    </Grid>
                </Grid>
            </Container>
        </MUIThemeProvider>
    );
}

export default HomePage;
