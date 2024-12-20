import React from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = React.useState<IUser[] | null > (null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users/${params.id}` 
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return <div>
    <button onClick={() => navigate('/users')}>Back</button>
    <h1>User {user?.name}</h1>
    <div>email: {user?.email}</div>
    <div>address: {user?.address.city}</div>
  </div>;
};

export default UserItemPage;
