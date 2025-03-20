// src/pages/Users.jsx
import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2 border-b pb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
