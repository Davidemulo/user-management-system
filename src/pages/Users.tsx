import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { RootState } from "../store/store";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  return (
    <div>
      <h1>Users List Page</h1>

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid gray", margin: 10 }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>
            {user.address.city}, {user.address.street}
          </p>
        </div>
      ))}
    </div>
  );
}