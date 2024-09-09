import React from "react";

import styles from "./addComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const AddComment: React.FC = () => {
  return (
    <>
      <div className={styles.addComment}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className={styles.form}>
          <TextField
            label="add your comment"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained">Send</Button>
        </div>
      </div>
    </>
  );
};

export default AddComment;
