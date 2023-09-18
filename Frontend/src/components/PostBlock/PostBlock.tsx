import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Post } from "../../types/post";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type PostBlockProps = {
  post: Post;
};

const PostBlock: React.FC<PostBlockProps> = ({ post }) => {
  const navigate = useNavigate();
  const { posts } = useSelector((state: RootState) => state.post);
  const activeCategory = useSelector(
    (state: RootState) => state.filter.idFilter
  );

  const handleClick = () => {
    navigate(`post/${post._id}`);
  };

  return (
    <>
      <Link to={`/post/${post._id}`}></Link>
      <div
        onClick={handleClick}
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
    </>
  );
};

export default PostBlock;
