import axios from "axios";

export const getJobs = async (offset = 0) => {
  return await axios
    .post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        limit: 10,
        offset,
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(({ data }) => ({ data }))
    .catch((error) => ({ error }));
};
