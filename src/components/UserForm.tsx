import { useState } from "react";
import { User } from "../store/userSlice";

interface Props {
  initialData?: User;
  onSubmit: (user: User) => void;
}

export default function UserForm({ initialData, onSubmit }: Props) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [city, setCity] = useState(initialData?.address.city || "");
  const [street, setStreet] = useState(initialData?.address.street || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user: User = {
      id: initialData?.id || Date.now(),
      name,
      email,
      address: {
        city,
        street,
      },
    };

    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit User" : "Add User"}</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />

      <button type="submit">
        {initialData ? "Update User" : "Add User"}
      </button>
    </form>
  );
}