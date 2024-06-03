import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import "../../scss/sideBlock/sideBlock.scss";

type SideBlockProps = {
  title: string;
  children: ReactNode;
};

export const SideBlock: React.FC<SideBlockProps> = ({ title, children }) => {
  return (
    <Paper classes={{ root: "root" }}>
      <Typography variant="h6" classes={{ root: "title" }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SideBlock;
