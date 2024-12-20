import React, { FC, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import List from "./List.tsx";
import UserItem from "./UserItem.tsx";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem onClick={() => navigate(`/users/${user.id}`)} key={user.id} user={user} />}
      />
  );
};

export default UserPage;
