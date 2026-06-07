import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../store/userSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  return (
    <div>
      <h1>Users List</h1>

      <button onClick={() => navigate("/add-user")}>
        Add User
      </button>

      {loading && <p>Loading...</p>}

      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid black", margin: 10 }}>
          <h3 onClick={() => navigate(`/users/${user.id}`)}>
            {user.name}
          </h3>

          <p>{user.email}</p>

          <button onClick={() => navigate(`/edit-user/${user.id}`)}>
            Edit
          </button>

          <button
            onClick={() => dispatch(deleteUser(user.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}