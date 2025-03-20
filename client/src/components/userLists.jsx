import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - Posts: {user.postCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
