// src/pages/PopularPosts.jsx
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const PopularPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts("popular");
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Popular Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mt-2 border-b pb-2">
            {post.content} - Comments: {post.commentCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;
