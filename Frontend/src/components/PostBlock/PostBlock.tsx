import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store";
import { Post } from "../../types/post";

type PostBockProps = {
  post: Post;
};

const PostBlock = (props: PostBockProps) => {
  const { post } = props;
  const activeCategory = useSelector(
    (state: RootState) => state.filter.idFilter
  );
  return (
    <>
      {
        <div
          className={
            activeCategory === post.category || activeCategory === 0
              ? "post-box"
              : "post-box post-box-none"
          }
        >
          <img src={post.img} alt="#" className="post-img"></img>
          <h2 className="category">{post.category}</h2>
          <a href="#" className="post-title">
            {post.title}
          </a>
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
