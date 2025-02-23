import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteTask from "src/components/molecules/DeleteTask";
import { useUpdateTaskStatus } from "src/hooks/useTask";
import { STATUS } from "src/types/task";
import { removeUnderscore } from "src/utils/format-string";

type TaskQuickActionsProps = {
  status: STATUS;
  id: string;
};

const TaskQuickAction = ({ status, id }: TaskQuickActionsProps) => {
  const { mutate } = useUpdateTaskStatus();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatus = (status: STATUS) => {
    mutate({ id, data: { status } });
    handleClose();
  };

  return (
    <Box
      onClick={stopPropagation}
      sx={{ position: "absolute", right: 5, top: 5 }}
    >
      <Box onClick={handleClick}>
        <MoreVertIcon sx={{ fontSize: "20px" }} />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ mb: "2px", pl: 2, fontWeight: "bold" }}>
          Move to:
        </Typography>
        {Object.values(STATUS).map((value, index) => {
          const skipStatusIndex = Object.values(STATUS).findIndex(
            (value) => value === status
          );
          return (
            skipStatusIndex != index && (
              <MenuItem
                key={value}
                onClick={() => handleStatus(value)}
                sx={{ gap: 1 }}
              >
                {index < skipStatusIndex && (
                  <ArrowBackIcon sx={{ fontSize: "20px" }} />
                )}
                {removeUnderscore(value)}
                {index > skipStatusIndex && (
                  <ArrowForwardIcon sx={{ fontSize: "20px" }} />
                )}
              </MenuItem>
            )
          );
        })}
        <Divider />
        <DeleteTask id={id}>
          <MenuItem sx={{ color: "#ff6666" }}>Delete</MenuItem>
        </DeleteTask>
      </Menu>
    </Box>
  );
};

export default TaskQuickAction;
