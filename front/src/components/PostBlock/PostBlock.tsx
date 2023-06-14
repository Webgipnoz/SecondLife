import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";

type postBlockProps = {
  title: string;
  img: string;
  category: number;
  date: string;
  description: string;
  profileImg: string;
  profileName: string;
};

const PostBlock: React.FC<postBlockProps> = (props) => {
  const activeCategory = useSelector(
    (state: RootState) => state.filter.idFilter
  );
  return (
    <>
      {
        <div
          className={
            activeCategory === props.category || activeCategory === 0
              ? "post-box"
              : "post-box post-box-none"
          }
        >
          <img src={props.img} alt="#" className="post-img"></img>
          <h2 className="category">{props.category}</h2>
          <a href="#" className="post-title">
            {props.title}
          </a>
          <span className="post-date">{props.date}</span>
          <p className="post-decription">{props.description}</p>
          <div className="profile">
            <img className="profile-img" src={props.profileImg}></img>
            <span className="profile-name">{props.profileName}</span>
          </div>
        </div>
      }
    </>
  );
};

export default PostBlock;
