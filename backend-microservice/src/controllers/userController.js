const { apiClient } = require("../config/apiClient");

const getTopUsers = async (req, res) => {
  try {
    const userResponse = await apiClient.get("/users");
    const users = userResponse.data.users;

    let userPostCounts = [];
    const userIds = Object.keys(users);

    for (let i = 0; i < userIds.length; i++) {
      const userId = userIds[i];
      let postCount = 0;

      try {
        const postResponse = await apiClient.get(`/users/${userId}/posts`);
        postCount = postResponse.data.posts.length;
      } catch (error) {
        console.error(`Failed to fetch posts for user ${userId}:`, error.message);
      }
      userPostCounts.push({ userId, name: users[userId], postCount });
    }
    for (let i = 0; i < userPostCounts.length - 1; i++) {
      for (let j = 0; j < userPostCounts.length - i - 1; j++) {
        if (userPostCounts[j].postCount < userPostCounts[j + 1].postCount) {
          let temp = userPostCounts[j];
          userPostCounts[j] = userPostCounts[j + 1];
          userPostCounts[j + 1] = temp;
        }
      }
    }

    const sortedUsers = userPostCounts.slice(0, 5);

    res.json(sortedUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top users",error });
  }
};

module.exports = { getTopUsers };