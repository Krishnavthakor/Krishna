// HomePage.js
import React from "react";
import { Container, Grid } from "@mui/material";
import ResponsiveAppBar from "../components/Header";
import ProfileComponent from "../components/Profile";
import ExperienceComponent from "../components/Experience";

function HomePage() {
    return (
        <Container maxWidth={"xl"}>
            <Grid container>
                <Grid item xs={12} >
                    <ResponsiveAppBar/>
                </Grid>
                <Grid item xs={12}>
                    <ProfileComponent/>
                </Grid>
                <Grid item xs={12}>
                    <ExperienceComponent/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;
