import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../store/userSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

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

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {!loading && users.length === 0 && (
        <p>No users available</p>
      )}

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            marginTop: 10,
            padding: 10,
          }}
        >
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/users/${user.id}`)}
          >
            {user.name}
          </h3>

          <p>{user.email}</p>

          <p>
            {user.address.city} - {user.address.street}
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => navigate(`/edit-user/${user.id}`)}>
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}