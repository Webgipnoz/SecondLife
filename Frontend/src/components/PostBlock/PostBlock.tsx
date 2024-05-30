import React from "react";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";

import "../../scss/post/posts.scss";
import { UserInfo } from "../UserInfo";
import SkeletonBlock from "./SkeletonBlock";
import { Post as PostInterface } from "../../types/post";

type PostProps = PostInterface & {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  children?: React.ReactNode;
  isFullPost?: boolean;
  isEditable?: boolean;
  isLoading?: boolean;
};

export const Post: React.FC<PostProps> = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <SkeletonBlock />;
  }

  const onClickRemove = () => {};

  return (
    <div className={clsx("root", { rootFull: isFullPost })}>
      {isEditable && (
        <div className="editButtons">
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx("image", { imageFull: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="wrapper">
        <UserInfo {...user} additionalText={createdAt} />
        <div className="indention">
          <h2 className={clsx("title", { titleFull: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          {children && <div className="content">{children}</div>}
          <ul className="postDetails">
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
