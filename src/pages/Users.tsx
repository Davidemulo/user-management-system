import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../store/userSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Management System</h1>

      <button onClick={() => navigate("/add-user")}>
        ➕ Add User
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length === 0 && !loading && (
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