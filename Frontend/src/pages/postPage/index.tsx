import { useEffect, useState } from "react";
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
    axios
      .get(`/posts/${_id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("We have a problem with this post");
        setIsLoading(false);
      });
  }, [_id]);

  if (isLoading) {
    return (
      <>
        <PostBlock key={1} isLoading={true} />;
      </>
    );
  }

  return (
    <div className="center">
      <div className="postblock">
        {data && (
          <PostBlock
            _id={data._id}
            title={data.title}
            imageUrl={data.imageUrl}
            category={data.category}
            text={data.text}
            user={{
              avatarLetter: data.user.avatarLetter || "N/A",
              fullName: data.user.fullName,
              avatarUrl: data.user.avatarUrl,
            }}
            createdAt={data.createdAt}
            viewsCount={data.viewsCount}
            commentsCount={data.commentsCount}
            fullName={"aaa"}
            isFullPost
            isLoading={false}
          >
            <p>{data.text}</p>
          </PostBlock>
        )}
      </div>
      <div className="commentblock">
        <CommentsBlock
          items={[
            {
              user: {
                fullName: "Вася Пупкин",
                avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
              },
              text: "Это тестовый комментарий 555555",
            },
            {
              user: {
                fullName: "Иван Иванов",
                avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
              },
              text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
            },
          ]}
          isLoading={false}
        >
          <AddComment />
        </CommentsBlock>
      </div>
    </div>
  );
};

export default PostPage;
