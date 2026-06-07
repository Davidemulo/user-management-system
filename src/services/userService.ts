import axios from "axios";
import type { User } from "../types/user";

export const fetchUsersAPI = async (): Promise<User[]> => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.data;
};
