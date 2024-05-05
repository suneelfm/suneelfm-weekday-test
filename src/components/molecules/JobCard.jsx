import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/JobCard.module.css";
import CustomButton from "../atoms/CustomButton";

export default function JobCard() {
  return (
    <Box className={styles.jobCard}>
      <Grid container mb={3}>
        <div className={styles.postedTimeTag}>⏳ Posted 11 days ago</div>
      </Grid>
      <Grid container className={styles.cardHeader}>
        <Avatar className={styles.logo} variant="square">
          A
        </Avatar>
        <Grid className={styles.companyName}>Firefly</Grid>
        <Grid className={styles.jobTitle}>Frontend Engineer</Grid>
        <Grid className={styles.location}>Banglore</Grid>
      </Grid>
      <Typography className={styles.estimatedSalary}>
        Estimated Salary: {"₹30 - 50 LPA"} ✅
      </Typography>
      <Typography mt={1} fontWeight={"500"} fontSize={"15px"}>
        About Company:
      </Typography>
      <Grid container className={styles.aboutCompany}>
        About us Firefly is a Cloud Asset Management solution that enables
        DevOps, SRE, and Cloud Platform teams to rediscover their entire cloud
        footprint, understand which parts of it are codified vs unmanaged,
        detect drifts to prevent service failures, classify assets using
        Policy-as-Code, and manage a single inventory of all their cloud
        resources across Multi-Cloud, and Kubernetes clusters.At Pinch, our
        dream is to transform the home ecosystem around families and help them
        create space for the truly important things, allowing them to focus on
        themselves and their well-being to build meaningful lives, filled with
        purpose and joy.F
      </Grid>
      <Grid className={styles.viewJobLink}>
        <a href="/" target="_blank">
          View job
        </a>
      </Grid>
      <Grid className={styles.minExp} mb={1}>
        <Typography component={"h3"}>Minimum Experience</Typography>
        <Typography>4 years</Typography>
      </Grid>
      <CustomButton onClick={() => {}}>⚡ Easy Apply</CustomButton>
    </Box>
  );
}
