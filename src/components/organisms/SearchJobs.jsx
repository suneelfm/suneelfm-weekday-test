import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import FilterBar from "../molecules/FilterBar";
import JobCard from "../molecules/JobCard";
import { useSelector } from "react-redux";
import { getJobs } from "../../services/getJobs";

export default function SearchJobs() {
  const [reqCount, setReqCount] = useState(0);
  const [jobsData, setJobsData] = useState({ jdList: [], totalCount: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const filters = useSelector((state) => state.filterJobs);

  const getAllJobs = async () => {
    setIsLoading(true);
    const { data, error } = await getJobs(reqCount);
    if (data) {
      setJobsData({ ...data, jdList: [...jobsData.jdList, ...data.jdList] });
      setIsLoading(false);
    } else if (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  useEffect(() => {
    getAllJobs();
  }, [reqCount]);

  return (
    <Grid container my={1}>
      <FilterBar />
      <Grid container p={3} spacing={4}>
        {jobsData?.jdList?.map((job, i) => (
          <Grid key={`job-${i + 1}`} item xs={12} sm={6} md={4} lg={3}>
            <JobCard jobData={job} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"flex-end"}
        height={"50px"}
        mb={2}
      >
        {isLoading && <CircularProgress />}
      </Grid>
    </Grid>
  );
}
