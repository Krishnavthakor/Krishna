// HomePage.js
import React from "react";
import { Grid, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/Header";

function HomePage() {
    return (
        <Grid container>
            <Grid item xs={12}>
               <Typography>Welcome Back</Typography>
            </Grid>
        </Grid>
    );
}

export default HomePage;
