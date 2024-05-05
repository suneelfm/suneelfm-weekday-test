import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/JobCard.module.css";
import CustomButton from "../atoms/CustomButton";

export default function JobCard({ jobData }) {
  return (
    <Box className={styles.jobCard}>
      <Grid container mb={2}>
        {/** I am displaying static sample time as there is not created time date in response */}
        <div className={styles.postedTimeTag}>⏳ Posted 11 days ago</div>
      </Grid>
      <Grid container className={styles.cardHeader}>
        <Avatar
          alt={jobData.companyName}
          src={jobData.logoUrl}
          className={styles.logo}
          variant="square"
        >
          {jobData.companyName.slice(0, 1).toUpperCase()}
        </Avatar>
        <Grid className={styles.companyName}>
          <span onClick={() => window.open(jobData.jdLink, "_blank")}>
            {jobData.companyName}
          </span>
        </Grid>
        {/** As there is no job title in the response, displaying jobRole here*/}
        <Grid className={styles.jobTitle}>{jobData.jobRole}</Grid>
        <Grid className={styles.location}>{jobData.location}</Grid>
      </Grid>
      <Typography className={styles.estimatedSalary}>
        Estimated Salary:{" "}
        {jobData.minJdSalary ? `$${jobData.minJdSalary} -` : "upto"}{" "}
        {/** Using dolor symbol for salary as the data is in USD*/}
        {jobData.minJdSalary ? "" : "$"} {jobData.maxJdSalary} PA ✅
      </Typography>
      <Typography mt={1} fontWeight={"500"} fontSize={"15px"}>
        About Company:
      </Typography>
      <Grid container className={styles.aboutCompany}>
        {jobData.jobDetailsFromCompany}
      </Grid>
      <Grid className={styles.viewJobLink}>
        <a href={jobData.jdLink}>View job</a>
      </Grid>
      <Grid className={styles.minExp} mb={1}>
        <Typography component={"h3"}>Minimum Experience</Typography>
        <Typography>
          {jobData.minExp ?? 0} year{jobData.minExp > 1 ? "s" : ""}
        </Typography>
      </Grid>
      <CustomButton>⚡ Easy Apply</CustomButton>
    </Box>
  );
}
