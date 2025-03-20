// src/pages/LatestPosts.jsx
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts("latest");
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Latest Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mt-2 border-b pb-2">
            {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;
