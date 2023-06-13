import React from "react";

type postBoxProps = {
  title: string;
  img: string;
  categoty: string;
  date: string;
  decription: string;
  profileImg: string;
  profileName: string;
};

const PostBox: React.FC<postBoxProps> = (props) => {
  return (
    <>
      <div className="post-box">
        <img src={props.img} alt="#" className="post-img"></img>
        <h2 className="categoty">{props.categoty}</h2>
        <a href="#" className="post-title">
          {props.title}
        </a>
        <span className="post-date">{props.date}</span>
        <p className="post-decription">{props.decription}</p>
        <div className="profile">
          <img className="profile-img" src={props.profileImg}></img>
          <span className="profile-name">{props.profileName}</span>
        </div>
      </div>
    </>
  );
};

export default PostBox;
