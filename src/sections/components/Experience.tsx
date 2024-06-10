import React from 'react';
import { Divider, Grid, Paper, Typography, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

interface SharedExperienceProps {
    title: string;
    company: string;
    years: string;
    text: string;
    icon: React.ReactNode;
}

const SharedExperience: React.FC<SharedExperienceProps> = ({ title, company, years, text, icon }) => {
    return (
        <Box
            sx={{
                mb: 4,
                p: 2,
                backgroundColor: '#f9f9f9',
                borderRadius: 2,
                transition: 'background-color 0.3s, transform 0.3s',
                '&:hover': {
                    backgroundColor: '#e0e0e0',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <Box display="flex" alignItems="center">
                        {icon}
                        <Box ml={2}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {company}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                {years}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography mt={2} variant="body1">
                        {text}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const ExperienceComponent = () => {
    const data = [
        {
            title: "Software Developer",
            company: "Viral Nation",
            years: "April 2023 - May 2024",
            text: "Experienced in front-end development using React.JS, HTML, CSS, and MUI, and back-end development with Node.JS, Prisma, GraphQL, PostgreSQL, and MS SQL Server. Designed new product features, customized reports, and fixed bugs for responsive web applications. Developed NPM packages for custom themes and shared modules. Conducted unit, integration, and end-to-end testing using Cypress, Storybook, and Playwright. Integrated GraphQL and REST APIs, and utilized Docker and Kubernetes for deployment. Managed database migrations with the Prisma Migration Tool.",
            icon: <WorkIcon fontSize="large" color="primary" />,
        },
        {
            title: "Software Developer",
            company: "Bliss Ladders",
            years: "August 2021 - April 2023",
            text: "Experienced in designing and developing new product features, customizing reports, and resolving bugs in responsive web applications. Proficient in both front-end (React JS, HTML, CSS, MUI) and back-end (Node.JS, PostgreSQL) development for interactive and responsive mobile web applications. Utilized code review methods, source code control, and issue tracking software to ensure high-quality feature releases.",
            icon: <WorkIcon fontSize="large" color="primary" />,
        },
        {
            title: "Business Systems Analyst (Co-op)",
            company: "CIBC",
            years: "January 2022 - April 2022",
            text: "Collaborated with the Enterprise Print Team on application deployment and digital transformation services to RICOH printers in retail environments. Identified business improvements, implemented system solutions, and deployed enhancements for field operations. Ensured compliance with internal standards through issue tracking and quality checks, including firmware updates. Managed installation, upgrades, and project deployments while maintaining comprehensive documentation for problem resolution and reference purposes.",
            icon: <SchoolIcon fontSize="large" color="secondary" />,
        },
        {
            title: "Software Developer",
            company: ITLuxTech",
            years: "May 2019 - April 2021",
            text: "Collaborated with a team of engineers in an agile environment. Developed web applications using HTML, CSS, Bootstrap, jQuery, React.JS, Node.JS, PHP, ASP .NET, MSSQL Server, and MySQL for an established Event Management Company in Surat. Provided support and training to clients' employees on application usage. Proficient in writing SQL queries, views, and stored procedures for MS SQL Server and MySQL databases.",
            icon: <WorkIcon fontSize="large" color="primary" />,
        },
    ];

    return (
        <Paper elevation={2} sx={{ p: 4, mt: 10, borderRadius: 2 }}>
            <Grid container gap={2}>
                <Grid item xs={12} mb={5}>
                    <Typography variant='h3' align='center'>
                        Work Experience
                    </Typography>
                </Grid>
                {data.map((experience, index) => (
                    <Grid item xs={12} key={index}>
                        <SharedExperience
                            title={experience.title}
                            company={experience.company}
                            years={experience.years}
                            text={experience.text}
                            icon={experience.icon}
                        />
                        {data.length - 1 !== index ? <Divider sx={{ mt: 2 }} /> : null}
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ExperienceComponent;
