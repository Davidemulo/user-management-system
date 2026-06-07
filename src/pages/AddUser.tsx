import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (user: any) => {
    dispatch(addUser(user));
    navigate("/users");
  };

  return <UserForm onSubmit={handleAdd} />;
}