// HomePage.js
import React from "react";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "../components/Header";

function HomePage() {
    return (
        <Grid container>
            <Grid item xs={12}>
               <ResponsiveAppBar/>
            </Grid>
        </Grid>
    );
}

export default HomePage;
