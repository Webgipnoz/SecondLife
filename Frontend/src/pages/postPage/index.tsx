import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PostBlock from "../../components/PostBlock/PostBlock";
import { useParams } from "react-router-dom";
import { Post } from "../../types/post";
import axios from "../../api/axios";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("We have a problem with this post");
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      <section className="post container"></section>
    </div>
  );
};

export default PostPage;
