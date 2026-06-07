import type { User } from "../types/user";
import { useNavigate } from "react-router-dom";

interface Props {
  user: User;
  onDelete: (id: number) => void;
}

export default function UserCard({ user, onDelete }: Props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        marginTop: 10,
      }}
    >
      <h3 onClick={() => navigate(`/users/${user.id}`)}>
        {user.name}
      </h3>

      <p>{user.email}</p>
      <p>{user.address.city}</p>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => navigate(`/edit-user/${user.id}`)}>
          Edit
        </button>

        <button onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}