import { useQuery } from "@tanstack/react-query";
import { fetchUsersAPI } from "../services/userService";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsersAPI,
  });
};