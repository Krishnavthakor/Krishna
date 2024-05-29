// HomePage.js
import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "../components/Header";
import ProfileComponent from "../components/Profile";
import ExperienceComponent from "../components/Experience";
import DiscoverSection from "../components/Discover";
import Skills from "../components/Skills";
import Education from "../components/Education";

function HomePage() {
    return (
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
                <Grid item xs={12}  id="work-experience" className="experience">
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
    );
}

export default HomePage;
