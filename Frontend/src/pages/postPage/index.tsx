import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PostBlock from "../../components/PostBlock/PostBlock";
import { useParams } from "react-router-dom";
//import { postsService } from "../../services/postsService";
import { Post } from "../../types/post";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  // useEffect(() => {
  //   if (id !== undefined) {
  //     postsService.getPost(+id).then((response) => {
  //       setPost(response);
  //     });
  //   }
  // }, [id]);

  return (
    <div>
      <Header />
      <section className="post container">
        {post && <PostBlock post={post} key={post.id} />}
      </section>
    </div>
  );
};

export default PostDetails;
