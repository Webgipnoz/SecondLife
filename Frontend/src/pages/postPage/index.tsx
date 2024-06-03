import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PostBlock from "../../components/PostBlock/PostBlock";
import { useParams } from "react-router-dom";
import { Post } from "../../types/post";
import axios from "../../api/axios";

import CommentsBlock from "../../components/CommentsBlock";
import AddComment from "../../components/AddComment";

const PostPage = () => {
  const { _id } = useParams<{ _id: string }>();
  const [data, setData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (_id) {
      axios
        .get(`/posts/${_id}`)
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
  }, [_id]);

  return (
    <div>
      <Header />
      <PostBlock
        _id={1}
        title="Roast the code #1 | Rock Paper Scissors"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        category={1}
        text="Hey there! 👋 I'm starting a new series called 'Roast the Code', where I will share some code, and let YOU roast and improve it. There's not much more to it, just be polite and constructive, this is an exercise so we can all learn together. Now then, head over to the repo and roast as hard as you can!!"
        user={{
          avatarLetter: "A",
          fullName: "Keff",
        }}
        createdAt={"12 июня 2022 г."}
        viewsCount={150}
        commentsCount={3}
        fullName={"aaa"}
        isFullPost
        isLoading={false}
      >
        <p>
          Hey there! 👋 I'm starting a new series called "Roast the Code", where
          I will share some code, and let YOU roast and improve it. There's not
          much more to it, just be polite and constructive, this is an exercise
          so we can all learn together. Now then, head over to the repo and
          roast as hard as you can!!
        </p>
      </PostBlock>
      <CommentsBlock items={[]} isLoading={false}>
        <AddComment />
      </CommentsBlock>
    </div>
  );
};

export default PostPage;
