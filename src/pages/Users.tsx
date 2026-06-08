import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import { fetchUsers, deleteUser } from "../store/userSlice";
import UserCard from "../components/UserCard";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { users, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Management System</h1>

      <button onClick={() => navigate("/add-user")}>
        Add User
      </button>

      {loading && <p>Loading users...</p>}

      {!loading && users.length === 0 && (
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