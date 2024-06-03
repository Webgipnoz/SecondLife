import React from "react";

import "../../scss/addComment/addComment.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const AddComment: React.FC = () => {
  return (
    <>
      <div className="root">
        <Avatar classes={{ root: "avatar" }} />
        <div className="form">
          <TextField
            label="add your comment"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};

export default AddComment;
