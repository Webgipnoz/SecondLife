import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import styles from "./sideBlock.module.scss";

type SideBlockProps = {
  title: string;
  children: ReactNode;
};

export const SideBlock: React.FC<SideBlockProps> = ({ title, children }) => {
  return (
    <Paper className={styles.root}>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SideBlock;
