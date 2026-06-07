import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "../pages/Users";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import UserDetails from "../pages/UserDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}