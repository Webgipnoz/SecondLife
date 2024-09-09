import React from "react";
import clsx from "clsx";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Link } from "react-router-dom";

import { Post } from "../../types/post";

import styles from "./posts.module.scss";
import { UserInfo } from "../UserInfo";
import SkeletonBlock from "./SkeletonBlock";

type LoadingPostProps = {
  isLoading: true;
  key: number;
};

type PostProps = Post & {
  user: {
    fullName: string;
    avatarLetter: string;
  };
  imageUrl: string;
  children?: React.ReactNode;
  isFullPost?: boolean;
  isEditable?: boolean;
  isLoading: false;
};

type Props = LoadingPostProps | PostProps;

export const PostBlock: React.FC<Props> = (props) => {
  if (props.isLoading) {
    return <SkeletonBlock />;
  }

  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: props.isFullPost })}>
      {props.isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${props._id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {props.imageUrl && (
        <img
          className={clsx(styles.image, {
            [styles.imageFull]: props.isFullPost,
          })}
          src={props.imageUrl}
          alt={props.title}
        />
      )}
      <div className={styles.wrapper}>
        <UserInfo {...props.user} additionalText={props.createdAt} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, {
              [styles.titleFull]: props.isFullPost,
            })}
          >
            {props.isFullPost ? (
              props.title
            ) : (
              <Link to={`/posts/${props._id}`}>{props.title}</Link>
            )}
          </h2>
          {props.children && (
            <div className={styles.content}>{props.children}</div>
          )}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{props.viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{props.commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostBlock;
