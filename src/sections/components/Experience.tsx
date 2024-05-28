import React from 'react';
import {  Divider, Grid, Typography } from '@mui/material';

interface SharedExperienceProps {
    title: string;
    company: string;
    years: string;
    text: string;
  }
  
  const SharedExperience: React.FC<SharedExperienceProps> = ({ title, company, years, text }) => {
    
    return(
        <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center" justifyContent="center"> 
                <Grid item xs={4}>
                    <div
                        style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        display: 'flex',           // Use flexbox
                        justifyContent: 'center',  // Center horizontally
                        alignItems: 'center',      // Center vertically
                        flexDirection: 'column',   // Align items in a column
                        width: '200px', // Adjust as needed
                        height: '150px' // Adjust as needed
                        }}
                    >
                    <Typography variant='h5'>{company}</Typography>
                    <Typography variant='body2'>{years}</Typography>

                        {/* Top-left half border */}
                        <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '50%', // Adjust to cover half the box
                            borderTop: '4px solid black', // Adjust border size and color
                            borderLeft: '4px solid black', // Adjust border size and color
                            borderRight: '4px solid transparent', // Make right border transparent
                            borderBottom: '4px solid transparent', // Make bottom border transparent
                            boxSizing: 'border-box',
                        }}
                        ></div>

                        {/* Bottom-right half border */}
                        <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '50%',
                            height: '50%', // Adjust to cover half the box
                            borderBottom: '4px solid black', // Adjust border size and color
                            borderRight: '4px solid black', // Adjust border size and color
                            borderLeft: '4px solid transparent', // Make left border transparent
                            borderTop: '4px solid transparent', // Make top border transparent
                            boxSizing: 'border-box',
                        }}
                        ></div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">
                    {title}
                    </Typography>
                    <Typography mt={2} variant="body1">
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mt:2, color:"blue"}}/>
        </Grid>
    )
}
const ExperienceComponent = () => {
    const data = [
        {
          title: "Software Engineer",
          company: "Viral Nation",
          years: "April 2023 - May 2024",
          text: "Experienced in front-end development using React.JS, HTML, CSS, and MUI, and back-end development with Node.JS, Prisma, GraphQL, PostgreSQL, and MS SQL Server. Designed new product features, customized reports, and fixed bugs for responsive web applications. Developed NPM packages for custom themes and shared modules. Conducted unit, integration, and end-to-end testing using Cypress, Storybook, and Playwright. Integrated GraphQL and REST APIs, and utilized Docker and Kubernetes for deployment. Managed database migrations with the Prisma Migration Tool."
        },
        {
          title: "Software Developer",
          company: "Bliss Ladders",
          years: "August 2021 - April 2023",
          text: "Experienced in designing and developing new product features, customizing reports, and resolving bugs in responsive web applications. Proficient in both front-end (React JS, HTML, CSS, MUI) and back-end (Node.JS, PostgreSQL) development for interactive and responsive mobile web applications. Utilized code review methods, source code control, and issue tracking software to ensure high-quality feature releases."
        },
        {
          title: "Business Systems Analyst (Co-op)",
          company: "CIBC",
          years: "January 2022 - April 2022",
          text: "Collaborated with the Enterprise Print Team on application deployment and digital transformation services to RICOH printers in retail environments. Identified business improvements, implemented system solutions, and deployed enhancements for field operations. Ensured compliance with internal standards through issue tracking and quality checks, including firmware updates. Managed installation, upgrades, and project deployments while maintaining comprehensive documentation for problem resolution and reference purposes."
        },
        {
          title: "Full Stack Developer",
          company: "M&J InfoTech",
          years: "May 2019 - April 2021",
          text: "Collaborated with a team of engineers in an agile environment. Developed web applications using HTML, CSS, Bootstrap, jQuery, PHP, ASP .NET, MSSQL Server, and MySQL for an established Event Management Company in Surat. Provided support and training to clients' employees on application usage. Proficient in writing SQL queries, views, and stored procedures for MS SQL Server and MySQL databases."
        }
      ];
  return (
    <Grid container gap={2} mt={5}>
        <Grid item xs={12} mb={5}>
            <Typography variant='h3' >
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
            />
            </Grid>
      ))}
      </Grid>
  );
};

export default ExperienceComponent;