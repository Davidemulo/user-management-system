import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id))
  );

  if (!user) {
    return (
      <div>
        <h2>User not found</h2>
        <button onClick={() => navigate("/users")}>
          Back to Users
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>User Details</h1>

      <div style={{ border: "1px solid black", padding: 10 }}>
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Street:</strong> {user.address.street}</p>
      </div>

      <br />

      <button onClick={() => navigate(`/edit-user/${user.id}`)}>
        Edit User
      </button>

      <button onClick={() => navigate("/users")}>
        Back
      </button>
    </div>
  );
}