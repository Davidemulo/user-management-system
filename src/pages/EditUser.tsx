import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store/store";
import { updateUser } from "../store/userSlice";
import UserForm from "../components/UserForm";

export default function EditUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id))
  );

  if (!user) return <p>User not found</p>;

  const handleUpdate = (updatedUser: any) => {
    dispatch(updateUser(updatedUser));
    navigate("/users");
  };

  return <UserForm initialData={user} onSubmit={handleUpdate} />;
}