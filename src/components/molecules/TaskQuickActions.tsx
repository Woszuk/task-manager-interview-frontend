import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteTask from "src/components/molecules/DeleteTask";
import { useUpdateTaskStatus } from "src/hooks/useTask";
import { STATUS } from "src/types/task";
import { formatText } from "src/utils/format-string";

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
        <MoreVertIcon />
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
        <Typography sx={{ textAlign: "center", mb: 1 }}>Move to</Typography>
        <Divider />
        {Object.values(STATUS)
          .filter((value) => value != status)
          .map((value) => (
            <MenuItem key={value} onClick={() => handleStatus(value)}>
              {formatText(value)}
            </MenuItem>
          ))}
        <Divider />
        <DeleteTask id={id}>
          <MenuItem sx={{ color: "#ff6666" }}>Delete</MenuItem>
        </DeleteTask>
      </Menu>
    </Box>
  );
};

export default TaskQuickAction;
