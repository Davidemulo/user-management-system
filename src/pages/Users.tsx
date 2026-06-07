import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useUsers();

  const users = data || [];

  return (
    <div style={{ padding: 20 }}>
      <h1>User Management System</h1>

      <button onClick={() => navigate("/add-user")}>
        ➕ Add User
      </button>

      {isLoading && <p>Loading users...</p>}

      {error && <p>Failed to load users</p>}

      {!isLoading && users.length === 0 && (
        <p>No users found</p>
      )}

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={(id) => dispatch(deleteUser(id))}
        />
      ))}
    </div>
  );
}