import React from "react";
import styles from "./userInfo.module.scss";

interface UserInfoProps {
  fullName: string;
  additionalText: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  fullName,
  additionalText,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
