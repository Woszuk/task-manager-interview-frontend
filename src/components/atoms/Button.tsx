import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonProps = MuiButtonProps & {
  children: React.ReactNode;
};

const Button = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <MuiButton
      size="medium"
      variant="outlined"
      sx={{
        fontSize: { xs: "12px", lg: "14px" },
        padding: { xs: "6px 12px", lg: "8px 16px" },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
