import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";  // Update this if needed

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchPosts = async (type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts?type=${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} posts:`, error);
    return [];
  }
};
