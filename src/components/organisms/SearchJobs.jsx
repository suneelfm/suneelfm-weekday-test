import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import FilterBar from "../molecules/FilterBar";
import JobCard from "../molecules/JobCard";
import { useSelector } from "react-redux";

export default function SearchJobs() {
  const filters = useSelector((state) => state.filterJobs);
  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <Grid container my={1}>
      <FilterBar />
      <Grid container p={3} spacing={4}>
        {[1, 2, 3, 4, 5, 6, 6].map((job, i) => (
          <Grid key={`job-${i + 1}`} item xs={12} sm={6} md={4} lg={3}>
            <JobCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
