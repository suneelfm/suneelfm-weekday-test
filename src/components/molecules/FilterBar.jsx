import { Grid } from "@mui/material";
import React from "react";
import Dropdown from "../atoms/Dropdown";
import {
  BASE_PAYS,
  EXPERIENCES,
  NO_OF_EMPS,
  ROLES,
  TECH_STACKS,
  WORK_MODES,
} from "../../data/filterOptions";

export default function FilterBar() {
  return (
    <Grid container px={3}>
      <Grid item component={"h2"} textAlign={"center"} xs={12}>
        Search Jobs
      </Grid>
      <Grid item xs={5} md={4} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={[]}
          options={ROLES}
          onDropdownChange={() => {}}
          placeholder={"Roles"}
        />
      </Grid>
      <Grid item xs={7} sm={4} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={[]}
          options={NO_OF_EMPS}
          onDropdownChange={() => {}}
          placeholder={"No Of Employees"}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={2} lg={1} paddingX={"3px"}>
        <Dropdown
          value={""}
          options={EXPERIENCES}
          onDropdownChange={() => {}}
          placeholder={"Experience"}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={[]}
          options={WORK_MODES}
          onDropdownChange={() => {}}
          placeholder={"Remote"}
        />
      </Grid>
      <Grid item xs={6} sm={4} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={[]}
          options={TECH_STACKS}
          onDropdownChange={() => {}}
          placeholder={"Tech Stack"}
        />
      </Grid>
      <Grid item xs={6} sm={5} md={2} paddingX={"3px"}>
        <Dropdown
          value={""}
          options={BASE_PAYS}
          onDropdownChange={() => {}}
          placeholder={"Min Base Pay Salary"}
        />
      </Grid>
    </Grid>
  );
}
