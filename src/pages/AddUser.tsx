import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/user";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (user: User) => {
  dispatch(addUser(user));
  navigate("/users");
  };

  return <UserForm onSubmit={handleAdd} />;
}