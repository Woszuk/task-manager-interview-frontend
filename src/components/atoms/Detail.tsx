import { Box, BoxProps, Typography } from "@mui/material";

type DetailProps = BoxProps & {
  label: string;
  value: string;
  preLine?: boolean;
};

const Detail = ({ label, value, preLine, sx, ...props }: DetailProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        maxWidth: 600,
        ...sx,
      }}
      {...props}
    >
      <Typography variant="h5">{label}:</Typography>
      <Typography
        variant="h6"
        sx={{ whiteSpace: preLine ? "pre-line" : "initial" }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default Detail;
