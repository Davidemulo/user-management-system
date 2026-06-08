import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import type { AppDispatch } from "../store/store";

export default function AddUser() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleAdd = (user: User) => {
    dispatch(addUser(user));
    navigate("/users");
  };

  return <UserForm onSubmit={handleAdd} />;
}