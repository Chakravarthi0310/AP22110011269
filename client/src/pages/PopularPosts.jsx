import { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";

const PopularPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts("popular");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };
    getPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Popular Posts
      </h2>

      {loading ? (
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "gray" }}>Loading posts...</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>User ID: {post.userId}</p>
              <p style={{ fontSize: "16px", marginBottom: "5px" }}>{post.content}</p>
              <p style={{ fontSize: "14px", color: "gray" }}>Comments: {post.commentCount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularPosts;
