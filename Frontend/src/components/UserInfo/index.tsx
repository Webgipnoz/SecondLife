import React from "react";
import "../../scss/userInfo/userInfo.scss";

interface UserInfoProps {
  fullName: string;
  additionalText: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  fullName,
  additionalText,
}) => {
  return (
    <div className="root">
      <div className="userDetails">
        <span className="userName">{fullName}</span>
        <span className="additional">{additionalText}</span>
      </div>
    </div>
  );
};
