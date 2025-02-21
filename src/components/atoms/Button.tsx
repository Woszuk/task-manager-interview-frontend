import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonProps = MuiButtonProps & {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MuiButton size="medium" variant="outlined" {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
