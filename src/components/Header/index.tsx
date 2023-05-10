import React from "react";
import { Icons } from "../../helpers/Icons";
import "../../assets/scss/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Icons.Logo />
      </div>
      <input className="search"></input>
      <div>
        <Icons.Messages />
        <Icons.Settings />
        <Icons.Pofile />
      </div>
    </div>
  );
};

export default Header;
