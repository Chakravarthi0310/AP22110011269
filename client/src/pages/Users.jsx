import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };
    getUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Users List
      </h1>

      {loading ? (
        <p style={{ fontSize: "18px", fontStyle: "italic", color: "gray" }}>Loading users...</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {users.map((user) => (
            <div
              key={user.userId}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Name: {user.name}</p>
              <p style={{ fontSize: "16px", marginBottom: "5px" }}>User ID: {user.userId}</p>
              <p style={{ fontSize: "14px", color: "gray" }}>Posts: {user.postCount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
