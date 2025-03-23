const { apiClient } = require("../config/apiClient");

const getPosts = async (req, res) => {
    try {
      const { type } = req.query;
      console.log("Received type parameter:", type); 
      if (!type || (type !== "latest" && type !== "popular")) {
        return res.status(400).json({ error: "Invalid type parameter. Use 'latest' or 'popular'." });
      }
      const userResponse = await apiClient.get("/users");
      const users = userResponse.data.users;
  
      let allPosts = [];
      for (const userId of Object.keys(users)) {
        const postResponse = await apiClient.get(`/users/${userId}/posts`);
        console.log(postResponse);
        allPosts.push(...postResponse.data.posts);
      }
  
      if (type === "latest") {
        allPosts.sort((a, b) => b.id - a.id);
        return res.json(allPosts.slice(0, 5));
      }
  
      
      if (type === "popular") {
        let postCommentCounts = [];
        for (const post of allPosts) {
            try {
                const commentResponse = await apiClient.get(`/posts/${post.id}/comments`);
                console.log(`Response for post ${post.id}:`, commentResponse.data); 
                const comments = commentResponse.data?.comments || [];     
                postCommentCounts.push({ ...post, commentCount: comments.length });
            } catch (error) {
                console.error(`Error fetching comments for post ${post.id}:`, error.message);
                postCommentCounts.push({ ...post, commentCount: 0 }); 
            }
        }
        postCommentCounts.sort((a, b) => b.commentCount - a.commentCount);
        return res.json(postCommentCounts.slice(0, 5));
    }
    } catch (error) {
      console.error("API Error:", error.message);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  };
  

module.exports = { getPosts };