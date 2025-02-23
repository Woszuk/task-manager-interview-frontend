import { Typography } from "@mui/material";
import { ClientError } from "graphql-request";

type ErrorProps = {
  error: ClientError | null;
};

const Error = ({ error }: ErrorProps) => {
  const errorMessage =
    error?.response?.errors?.[0].message ||
    "Something went wrong, try again later";
  return <Typography>{errorMessage}</Typography>;
};

export default Error;
