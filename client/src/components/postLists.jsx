import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const PostsList = ({ type }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts(type);
      setPosts(data);
    };
    getPosts();
  }, [type]);

  return (
    <div>
      <h2>{type === "latest" ? "Latest Posts" : "Popular Posts"}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.content} {/* Fix: Use `content` instead of `title` */}
            {type === "popular" && ` - Comments: ${post.commentCount}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
