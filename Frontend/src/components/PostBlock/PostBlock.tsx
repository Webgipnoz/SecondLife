import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Post } from "../../types/post";
import { useNavigate, useParams } from "react-router-dom";

type PostBockProps = {
  post: Post;
};

const PostBlock = (props: PostBockProps) => {
  const { id } = useParams();
  const { post } = props;
  const navigate = useNavigate();
  const activeCategory = useSelector(
    (state: RootState) => state.filter.idFilter
  );

  const handleClick = () => {
    navigate(`post/${post.id}`);
  };

  return (
    <>
      {
        <div
          onClick={id ? undefined : handleClick}
          className={
            activeCategory === post.category || activeCategory === 0
              ? "post-box"
              : "post-box post-box-none"
          }
        >
          <img src={post.img} alt="#" className="post-img"></img>
          <a className="post-title">{post.title}</a>
          <span className="post-date">{post.date}</span>
          <p className="post-decription">{post.description}</p>
          <div className="profile">
            <img className="profile-img" src={post.profileImg}></img>
            <span className="profile-name">{post.profileName}</span>
          </div>
        </div>
      }
    </>
  );
};

export default PostBlock;
