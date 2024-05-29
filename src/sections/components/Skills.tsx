import { Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
import ReactIcon from "../assets/skills_icons/icons8-react.gif";
import AndroidIcon from "../assets/skills_icons/icons8-android-48.png";
import CSSIcon from "../assets/skills_icons/icons8-css3-48.png";
import GithubIcon from "../assets/skills_icons/icons8-github.gif";
import GraphqlIcon from "../assets/skills_icons/icons8-graphql-48.png";
import HtmlIcon from "../assets/skills_icons/icons8-html.gif";
import JSIcon from "../assets/skills_icons/icons8-javascript.gif";
import NodeIcon from "../assets/skills_icons/icons8-nodejs-48.png";
import SqlIcon from "../assets/skills_icons/icons8-sql-48.png";
import TSIcon from "../assets/skills_icons/icons8-typescript-48.png";
import JavaIcon from "../assets/skills_icons/icons8-java.gif";
import ClickUpIcon from "../assets/skills_icons/icons8-clickup-100.png";
import JiraIcon from "../assets/skills_icons/icons8-jira-48.png";
import PostgreSqlIcon from "../assets/skills_icons/icons8-postgresql-100.png";
import VSCodeIcon from "../assets/skills_icons/icons8-visual-studio-code-2019-48.png";
import PhpIcon from "../assets/skills_icons/icons8-php-64.png";
import PythonIcon from "../assets/skills_icons/icons8-python.gif";

const Skills = () => {

    const icons = [
        { src: HtmlIcon, alt: "HTML" },
        { src: CSSIcon, alt: "CSS" },
        { src: JSIcon, alt: "JavaScript" },
        { src: TSIcon, alt: "TypeScript" },
        { src: ReactIcon, alt: "React" },
        { src: NodeIcon, alt: "Node.js" },
        { src: GraphqlIcon, alt: "GraphQL" },
        { src: SqlIcon, alt: "SQL" },
        { src: PostgreSqlIcon, alt: "PostgreSQL" },
        { src: AndroidIcon, alt: "Android" },
        { src: JavaIcon, alt: "Java" },
        { src: PhpIcon, alt: "PHP" },
        { src: PythonIcon, alt: "Python" },
        { src: ClickUpIcon, alt: "ClickUp" },
        { src: GithubIcon, alt: "Github" },
        { src: JiraIcon, alt: "Jira" },
        { src: VSCodeIcon, alt: "Visual Studio Code" },
    ];

    return (
        <Box sx={{ mt: 12, px: 2 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Skills
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {icons.map((item, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 2,
                                textAlign: "center",
                                transition: "transform 0.3s",
                                '&:hover': {
                                    transform: "scale(1.08)"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={item.src}
                                alt={item.alt}
                                sx={{ width: 50, height: 50, mb: 1 }}
                            />
                            <Typography variant="body2">{item.alt}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
